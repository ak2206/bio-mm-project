<template>
	<div class="disease-card">
		<span class="disease-card-header">
			<h2>{{ diseaseName }}</h2>
			<span
				class="expand-arrow"
				@click="expanded = !expanded"
					>
				{{ expanded ? "&#x25B2;" : "&#x25BC;" }}
			</span>
		</span>
		
		<span
			v-if="ttsEnabled"
			class="disease-speaker"
			@click="speak()"
				>
				
			&#x1F50A;
			
		</span>
		
		<p v-show="expanded" class="disease-description">
			{{ diseaseDescription }}
		</p>
	</div>
</template>

<script lang="ts">
	import Vue from "vue";

	export default Vue.extend({
		props: {
			diseaseName: {
				type: String,
				required: true,
			},
			
			diseaseDescription: {
				type: String,
				required: true,
			}
		},
		
		data() {
			return {
				expanded: false,
				ttsEnabled: window.speechSynthesis != undefined,
			};
		},
		
		methods: {
			speak() {
				if (window.speechSynthesis.speaking) {
					window.speechSynthesis.cancel();
				} else {
					const textToSpeak = this.diseaseDescription;
					
					window.speechSynthesis.speak(
						new SpeechSynthesisUtterance(textToSpeak)
					);
				}
			}
		}
	});
</script>

<style lang="scss">
	.disease-card {
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
	
	.disease-card-header {
		> h2 {
			display: inline;
		}
		grid-area: header
	}
	
	.expand-arrow, .disease-speaker {
		cursor: pointer;
	}
	
	.disease-speaker {
		display: flex;
		
		grid-area: speaker;
		font-size: x-large;
	}
	
	.disease-description {
		white-space: pre-wrap;
		text-align: left;
		
		grid-area: dscr;
	}
</style>
