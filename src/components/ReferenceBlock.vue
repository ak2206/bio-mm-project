<template>
	<div class="reference-block">
		<span class="header">References</span>
		<span class="expand-button" @click="expanded = !expanded">
			[{{
				expanded ?
					"-" :
					"+"
			}}]
		</span>
		
		<div class="content" v-show="expanded">
			Humbert, Olivier, Luther Davis, and Nancy Maizels. “Targeted Gene Therapies: Tools, Applications, Optimization.” Critical Reviews in Biochemistry and Molecular Biology 47, no. 3 (April 24, 2012): 264–81. https://doi.org/10.3109/10409238.2012.658112
			<br/>
			<i>Used for general descriptions of targeted gene therapy at the top of the page, as well as the information on the "Targeting" card in the Challenges section.</i>
			<br/><br/>
			
			“Primary Hyperoxaluria - Genetics Home Reference - NIH.” U.S. National Library of Medicine. National Institutes of Health, November 12, 2019. https://ghr.nlm.nih.gov/condition/primary-hyperoxaluria.
			<br/>
			<i>Used for part of description of primary hyperoxaluria.</i>
			<br/><br/>
			
			Estève, Julie, Jean-Marc Blouin, Magalie Lalanne, Lamia Azzi-Martin, Pierre Dubus, Audrey Bidet, Jérôme Harambat, et al. “Targeted Gene Therapy in Human-Induced Pluripotent Stem Cells from a Patient with Primary Hyperoxaluria Type 1 Using CRISPR/Cas9 Technology.” Biochemical and Biophysical Research Communications 517, no. 4 (October 2019): 677–83. https://doi.org/10.1016/j.bbrc.2019.07.109
			<br/>
			<i>Used for part of description of primary hyperoxaluria, as well as information on prospective TGT treatments.</i>
			<br/><br/>
			
			Edgar, Julia M., and Ian R. Griffiths. “White Matter Structure.” In Diffusion MRI, 127–53. Elsevier, 2014. https://doi.org/10.1016/b978-0-12-396460-1.00007-x
			<br/>
			<i>Used for part of description of axonal degeneration.</i>
			<br/><br/>
			
			Geisler, Stefanie, Shay X. Huang, Amy Strickland, Ryan A. Doan, Daniel W. Summers, Xianrong Mao, Jiwoong Park, Aaron DiAntonio, and Jeffrey Milbrandt. “Gene Therapy Targeting SARM1 Blocks Pathological Axon Degeneration in Mice.” The Journal of Experimental Medicine, January 14, 2019, jem.20181040. https://doi.org/10.1084/jem.20181040
			<br/>
			<i>Used for part of description of axonal degeneration, as well as information on prospective TGT treatments.</i>
			<br/><br/>
			
			“Glaucoma: MedlinePlus Medical Encyclopedia.” MedlinePlus. U.S. National Library of Medicine, November 6, 2019. https://medlineplus.gov/ency/article/001620.htm.
			<br/>
			<i>Used for description of glaucoma.</i>
			<br/><br/>
			
			Bosco, Alejandra, Sarah R. Anderson, Kevin T. Breen, Cesar O. Romero, Michael R. Steele, Vince A. Chiodo, Sanford L. Boye, William W. Hauswirth, Stephen Tomlinson, and Monica L. Vetter. “Complement C3-Targeted Gene Therapy Restricts Onset and Progression of Neurodegeneration in Chronic Mouse Glaucoma.” Molecular Therapy 26, no. 10 (October 2018): 2379–96. https://doi.org/10.1016/j.ymthe.2018.08.017
			<br/>
			<i>Used for information on prospective TGT treatments of glaucoma.</i>
			<br/><br/>
			
			Genetic Science Learning Center. "Challenges In Gene Therapy." Learn.Genetics. December 1, 2012. Accessed November 16, 2019. https://learn.genetics.utah.edu/content/genetherapy/challenges/.
			<br/>
			<i>Used for information on TGT challenges, specifically the "Delivery and activation", "Immune response", and "Commercial Viability" cards.</i>
		</div>
	</div>
</template>

<script lang="ts">
	import Vue from "vue";

	export default Vue.extend({
		data() {
			return {
				expanded: false,
			};
		},
	});
</script>

<style lang="scss" scoped>
	.reference-block {
		position: absolute;
		top: 0;
		right: 0;
		
		min-width: 9em;
		max-width: 45vw;
		padding: .7em;
		margin: .3em;
		
		background-color: #b6cca1;
		border: solid #60695C .3em;
		border-radius: 1.5em;
		
		display: grid;
		grid-template-areas:
			"header expand-button"
			"content content";
	}
	
	.header {
		grid-area: header;
		justify-self: start;
		
		font-weight: bold;
		font-size: larger;
	}
	
	.expand-button {
		grid-area: expand-button;
		justify-self: end;
		
		cursor: pointer;
		padding-top: 1px;
		
		font-weight: bold;
		font-family: monospace;
		font-size: larger;
	}
	
	.content {
		grid-area: content;
		
		text-align: left;
	}
</style>
