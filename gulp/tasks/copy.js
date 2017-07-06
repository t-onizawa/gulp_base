// require
const
	config = require('../config/config.js'),
	gulp = require('gulp');

/**
 * TASK
 */
gulp.task('copy', () => {
	return gulp.src(config.path.src + '.' + config.setting.copy.ext)
		.pipe(gulp.dest(config.path.dist));
});