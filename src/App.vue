<template>
	<div id="app">
		<div id="tgt-header">
				
			<h1 id="tgt-title">Targeted Gene Therapy</h1>
			
			<p id="tgt-dscr">
				A significant number of diseases in humans are caused by adverse mutations in specific genes that prevent cells from carrying out their functions, or make them do so incorrectly.
				
				<br/><br/>
				
				In response, targeted gene therapies have been created to combat the source of such diseases, the mutated genes themselves, via restriction enzymes that cut away DNA from the specific diseased sites. This allows the cell's own repair functions to erase the mutation and replace it with the correct sequence.
			</p>
		
		</div>
		
		<hr/>
		
		<div id="disease-card-list">
			<disease-card
				v-for="disease in diseaseList"
				:key="disease.name"
				:diseaseName="disease.name"
				:diseaseDescription="disease.description"
			/>
		</div>
	</div>
</template>

<script lang="ts">
	import axios from "axios";
	import Vue from 'vue';
	
	import DiseaseCard from "@/components/DiseaseCard.vue";
	
	const listURL = process.env.NODE_ENV === "production"
		? "/bio-mm-project/diseases.json"
		: "/diseases.json";
	
	const diseaseListPromise = axios.get(listURL);

	export default Vue.extend({
		name: 'app',
		
		components: {
			"DiseaseCard": DiseaseCard,
		},
		
		data() {
			return {
				diseaseList: [],
			};
		},
		
		mounted() {
			diseaseListPromise.then((response) => {
				this.diseaseList = response.data;
			})
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
	}
	
	#tgt-header {
		margin: 0 15% 2em;
	}
	
	#disease-card-list {
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
