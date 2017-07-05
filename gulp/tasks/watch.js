// require
const
	config = require('../config/config.js'),
	gulp = require('gulp'),
	browserSync = require('browser-sync');

const
	htmlExt = config.setting.html.template.type.toLowerCase(),
	cssType = config.setting.css.compiler.type.toLowerCase(),
	cssExt = ext = cssType === 'stylus' ? 'styl' : cssType;

/**
 * TASK
 */
gulp.task('watch', () => {
	gulp.watch(`${config.path.html.src}.${htmlExt}`, ['html']);
	gulp.watch(`${config.path.css.src}.${cssExt}`, ['css']);
	gulp.watch(`${config.path.js.src}.js`, ['js']);
	gulp.watch(`${config.path.img.src}.+(png|jpeg|jpg|gif)`, ['img']);
	gulp.watch(`${config.path.src}sprite/*.png`, ['sprite']);
	gulp.watch(
		[`${config.path.dist}/**/*.{html,js,png,jpg,jpeg,gif,svg}`], ['reload']
	);
});