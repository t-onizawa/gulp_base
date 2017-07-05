// require
const
	config = require('../config/config.js'),
	gulp = require('gulp'),
	browserSync = require('browser-sync');

/**
 * TASK
 */
gulp.task('server', () => {
	browserSync.init({
		server: config.path.dist
	});
});