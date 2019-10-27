<template>
	<div id="app">
		<h1>Targeted Gene Therapy</h1>
		
		<p>
			A significant number of diseases in humans are caused by adverse mutations in specific genes that prevent cells from carrying out their functions, or make them do so incorrectly. In response, targeted gene therapies have been created to combat the source of such diseases
		</p>
		
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
		margin-top: 60px;
	}
	
	html, body {
		width: 100%;
		min-height: 100%;
	}
	
	body {
		background-color: #d7fcd4;
	}
	
	#disease-card-list {
		display: flex;
		flex-flow: row wrap;
		
		> * {
			margin-right: 1.5em;
			margin-bottom: 1.5em;
		}
	}
</style>
