// { setting, path }
const config = require('./gulp/config/config.js');

const
	gulp = require("gulp"),
	runSequence = require('run-sequence'),
	requireDir = require('require-dir');

requireDir('./gulp/tasks', {recurse: true});

/**
 * default
 */
gulp.task('default', () => {
	runSequence(
		'sprite:png',
		['html', 'css', 'js', 'img', 'watch', 'server']
	);
});