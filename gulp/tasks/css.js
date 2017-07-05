// require
const
	config = require('../config/config.js'),
	gulp = require('gulp'),
	gulpif = require('gulp-if'),
	sass = require('gulp-sass'),
	stylus = require('gulp-stylus'),
	autoprefixer = require('gulp-autoprefixer'),
	cached = require('gulp-cached'),
	plumber = require('gulp-plumber'),
	browserSync = require('browser-sync');

// const
const
	type = config.setting.css.compiler.type.toLowerCase(),
	useSass = type === 'sass' || type === 'scss',
	useStylus = type === 'stylus',
	ext = type === 'stylus' ? 'styl' : type;

/**
 * TASK
 */
gulp.task('css', () => {
	return gulp.src(config.path.css.src + '.' + ext)
		.pipe(cached('css'))
		.pipe(plumber({
			errorHandler: function(err) {
				console.log(err);
				this.emit('end');
			}
		}))
		.pipe(gulpif(useSass, sass(config.setting.css.compiler.options)))
		.pipe(gulpif(useStylus, stylus(config.setting.css.compiler.options)))
		.pipe(autoprefixer({
			browsers: config.setting.css.browsers,
			cascade: false
		}))
		.pipe(gulp.dest(config.path.dist))
		.pipe(browserSync.stream());
});