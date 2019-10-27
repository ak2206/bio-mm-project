<template>
	<div class="disease-card">
		<h2>{{ diseaseName }}</h2>
		<p>
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
		}
	});
</script>

<style lang="scss">
	.disease-card {
		width: 35ch;
		background-color: #b6cca1;
		
		border: solid #b68f40 .3em;
		border-radius: 2em;
		
		padding: .7em;
	}
</style>
