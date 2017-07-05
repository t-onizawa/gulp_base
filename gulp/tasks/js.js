// require
const
	config = require('../config/config.js'),
	gulp = require('gulp'),
	gulpif = require('gulp-if'),
	webpackStream = require("webpack-stream"),
	webpack = require('webpack'),
	named = require('vinyl-named'),
	cached = require('gulp-cached'),
	changed = require('gulp-changed'),
	plumber = require('gulp-plumber');

// const
const useWebpack = config.setting.js.webpack;

/**
 * TASK
 */
gulp.task('js', () => {
	return gulp.src(config.path.js.src + '.js')
		// .pipe(cached('js'))
		// .pipe(changed(config.path.js.src + '.js'))
		.pipe(plumber({
			errorHandler: function(err) {
				console.log(err);
				this.emit('end');
			}
		}))
		.pipe(gulpif(useWebpack, named((file) => {
			return file.relative.replace(/\.[^\.]+$/, '');
		})))
		.pipe(gulpif(useWebpack, webpackStream(config.setting.js.options, webpack)))
		.pipe(gulp.dest(config.path.dist));
});
