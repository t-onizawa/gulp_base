// require
const
	config = require('../config/config.js'),
	gulp = require('gulp'),
	gulpif = require('gulp-if'),
	jade = require('gulp-jade'),
	pug = require('gulp-pug'),
	ejs = require('gulp-ejs'),
	ect = require('gulp-ect'),
	cached = require('gulp-cached'),
	plumber = require('gulp-plumber');

// const
const
	type = config.setting.html.template.type.toLowerCase(),
	useJade = type === 'jade',
	usePug  = type === 'pug',
	useEjs  = type === 'ejs',
	useEct  = type === 'ect';

/**
 * TASK
 */
gulp.task('html', () => {
	return gulp.src(config.path.html.src + '.' + type)
		.pipe(cached('html'))
		.pipe(plumber({
			errorHandler: function(err) {
				console.log(err);
				this.emit('end');
			}
		}))
		.pipe(gulpif(useJade, jade(config.setting.html.template.options)))
		.pipe(gulpif(usePug,  pug(config.setting.html.template.options)))
		.pipe(gulpif(useEjs,  ejs(config.setting.html.template.options)))
		.pipe(gulpif(useEct,  ect(config.setting.html.template.options)))
		.pipe(gulp.dest(config.path.dist));
});