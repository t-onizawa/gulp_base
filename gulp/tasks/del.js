// require
const
	config = require('../config/config.js'),
	gulp = require('gulp'),
	del = require('del');

/**
 * TASK
 */
gulp.task('del', () => {
	del.sync([config.path.dist], {force: true});
});
