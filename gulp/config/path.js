const srcDir = 'src/',
	  distDir = 'dist/';

const path = {
	html: {
		src: srcDir + '**/*',
	},
	css: {
		src: srcDir + '**/*',
		directoryName: 'css'
	},
	js: {
		src: srcDir + '**/*',
		directoryName: 'js'
	},
	img: {
		src: srcDir + '**/*',
		directoryName: 'img',
		sprites: 'sprites'
	},

	src: srcDir,
	dist: distDir
};

module.exports = path;