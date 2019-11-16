<template>
	<div class="info-card">
		<span class="info-card-header">
			<h2>{{ name }}</h2>
			<span
				class="expand-arrow"
				@click="expanded = !expanded"
					>
				{{ expanded ? "&#x25B2;" : "&#x25BC;" }}
			</span>
		</span>
		
		<span
			v-if="ttsEnabled"
			class="speaker"
			@click="speak()"
				>
				
			&#x1F50A; <!-- Speaker character -->
			
		</span>
		
		<p v-show="expanded" class="description">{{ description }}</p>
	</div>
</template>

<script lang="ts">
	import Vue from "vue";

	export default Vue.extend({
		props: {
			name: {
				type: String,
				required: true,
			},
			
			description: {
				type: String,
				required: true,
			},
		},
		
		data() {
			return {
				expanded: false,
				ttsEnabled: window.speechSynthesis != undefined,
			};
		},
		
		methods: {
			speak() {
				// In Chrome, speech synthesis automatically stops after 15
				//   seconds, which causes longer texts to get cut off.
				// To get around this, regularly force it to resume.
				let resumeTimeout: number;
				function resumeSpeechForever() {
					window.speechSynthesis.resume();
					resumeTimeout = setTimeout(resumeSpeechForever, 500);
				}
				
				if (window.speechSynthesis.speaking) {
					window.speechSynthesis.cancel();
					
				} else {
					const textToSpeak = this.description;
					const utterance = new SpeechSynthesisUtterance(textToSpeak);
					
					utterance.onstart = resumeSpeechForever;
					utterance.onend = () => {
						clearTimeout(resumeTimeout);
					};
					
					window.speechSynthesis.speak(utterance);
				}
			},
		},
	});
</script>

<style lang="scss" scoped>
	.info-card {
		width: 35ch;
		background-color: #b6cca1;
		
		border: solid #60695C .3em;
		border-radius: 2em;
		
		padding: .7em;
		
		display: grid;
		grid-template-areas:
			"header speaker"
			"dscr dscr";
		grid-template-columns: 1fr auto;
		grid-template-areas: auto 1fr;
	}
	
	.info-card-header {
		> h2 {
			display: inline;
		}
		grid-area: header
	}
	
	.expand-arrow, .speaker {
		cursor: pointer;
	}
	
	.speaker {
		display: flex;
		
		grid-area: speaker;
		font-size: x-large;
	}
	
	.description {
		white-space: pre-wrap;
		text-align: left;
		
		grid-area: dscr;
	}
</style>
