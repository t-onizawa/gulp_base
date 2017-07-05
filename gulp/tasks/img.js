// require
const
	config = require('../config/config.js'),
	gulp = require('gulp'),
	gulpif = require('gulp-if'),
	changed = require('gulp-changed'),
	plumber = require('gulp-plumber'),
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant');
	// imagemin = require('/Applications/node_modules/gulp-imagemin'),
	// pngquant = require('/Applications/node_modules/imagemin-pngquant');

// const
const
	compress = config.setting.img.compress;


/**
 * TASK
 */
gulp.task('img', () => {
	return gulp.src(config.path.img.src + '.' + '+(png|jpeg|jpg|gif|svg)')
		// .pipe(changed(config.path.dist + config.path.img.directoryName))
		.pipe(plumber({
			errorHandler: function(err) {
				console.log(err);
				this.emit('end');
			}
		}))
		.pipe(gulpif(compress, imagemin(
			[imagemin.gifsicle(), imagemin.jpegtran(), pngquant(), imagemin.svgo()]
		)))
		.pipe(gulp.dest(config.path.dist));
});