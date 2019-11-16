<template>
	<div id="app">
		<div id="tgt-header">
				
			<h1 id="tgt-title">Targeted Gene Therapy</h1>
			
			<p id="tgt-dscr">
				Many diseases in humans are caused by mutations in specific genes which make cells perform their functions incorrectly, or even prevent them from carrying out their functions entirely. Targeted gene therapies have been created to treat these diseases by going to the root cause, and changing those genes back to what they should be.
				
				<br/><br/>
				
				TGT gives cells two essential tools to help correct themselves, restriction enzymes and DNA templates. Restriction enzymes are designed to cut away a very specific piece of DNA (the mutated genes), allowing the cell's own repair functions to erase the mutation and work off the DNA template to replace it with the correct sequence.
			</p>
		
		</div>
		
		<hr/>
		
		<h1>Diseases</h1>
		
		<div class="info-card-list">
			<info-card
				v-for="disease in diseaseList"
				:key="disease.name"
				:name="disease.name"
				:description="disease.description"
			/>
		</div>
		
		<hr/>
		
		<h1>Challenges</h1>
		
		<div class="info-card-list">
			<info-card
				v-for="challenge in challengeList"
				:key="challenge.name"
				:name="challenge.name"
				:description="challenge.description"
			/>
		</div>
		
		<reference-block/>
	</div>
</template>

<script lang="ts">
	import axios from "axios";
	import Vue from "vue";
	
	import InfoCard from "@/components/InfoCard.vue";
	import ReferenceBlock from "@/components/ReferenceBlock.vue";
	
	const listURL = "cards.json";
	
	const diseaseListPromise = axios.get(listURL);

	export default Vue.extend({
		name: "app",
		
		components: {
			"InfoCard": InfoCard,
			"ReferenceBlock": ReferenceBlock,
		},
		
		data() {
			return {
				diseaseList: [],
				challengeList: [],
			};
		},
		
		mounted() {
			diseaseListPromise.then((response) => {
				this.diseaseList = response.data.diseases;
				this.challengeList = response.data.challenges;
			});
		},
	});
</script>

<style lang="scss">
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		
		margin: 2.5em 5em;
	}
	
	html, body {
		min-height: 100%;
	}
	
	body {
		background-color: #d7fcd4;
		overflow-y: scroll;
	}
	
	#tgt-header {
		margin: 0 15% 2em;
	}
	
	.info-card-list {
		display: flex;
		flex-flow: row wrap;
		align-items: flex-start;
		
		margin-top: 2em;
		
		> * {
			margin-right: 1.5em;
			margin-bottom: 1.5em;
		}
	}
</style>
