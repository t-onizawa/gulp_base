// require
const
	config = require('../config/config.js'),
	gulp = require('gulp'),
	del = require('del'),
	runSequence = require('run-sequence');
	browserSync = require('browser-sync');

/**
 * TASK
 */
gulp.task('build', (cb) => {
	del.sync([config.path.dist], {force: true});

	runSequence(
		'sprite',
		['html','css','js','img'],
		cb
	);
});