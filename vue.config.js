module.exports = {
	publicPath: process.env.NODE_ENV === "production"
		? "/bio_mm_project/"
		: "/",
	
	outputDir: "../bio-mm-pages/"
}