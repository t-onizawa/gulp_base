// require
const
	config = require('../config/config.js'),
	gulp = require('gulp');

/**
 * TASK
 */
gulp.task('del', () => {
	del.sync([config.path.dist], {force: true});
});
