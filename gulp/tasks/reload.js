// require
const
	config = require('../config/config.js'),
	gulp = require('gulp'),
	browserSync = require('browser-sync');

/**
 * TASK
 */
let timer = null;
gulp.task('reload', () => {
	clearTimeout(timer);
	timer = setTimeout(() => {
		browserSync.reload();
	},100);
});