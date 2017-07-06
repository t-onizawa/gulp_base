const setting = {
	html: {
		template: {
			type: 'html', // jade, pug, ejs, ect, or html
			options: {}
		}
	},

	css: {
		compiler: {
			type: 'scss', // sass, stylus, or css
			options: {
				outputStyle: 'expanded',
				sourceMap: false,
				sourceComments: false
			}
		},
		browsers: ['last 2 version']
	},

	js: {
		webpack: true,  // true or false
		options: {
			watch: true,
			module: {
				rules: [
					{
						test: /\.js$/,
						exclude: /node_modules/,
						loader: "babel-loader",
						query:{
							presets: ['react', 'es2015']
						}
					}
				]
			}
		}
	},

	img: {
		compress: true,

		sprite: true,
		spritePrefix: 'sprite-'
	},

	copy: {
		ext: '(json)'
	}

};

module.exports = setting;