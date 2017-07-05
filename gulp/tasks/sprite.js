// require
const
	config = require('../config/config.js'),
	gulp = require('gulp'),
	gulpif = require('gulp-if'),
	spritesmith = require('gulp.spritesmith'),
	changed = require('gulp-changed'),
	plumber = require('gulp-plumber');

// const
const
	sprite = config.setting.img.sprite;

const
	cssType = config.setting.css.compiler.type.toLowerCase(),
	cssExt = ext = cssType === 'stylus' ? 'styl' : cssType;

/**
 * TASK
 */
gulp.task('sprite:png', () => {

	if (!sprite) {
		return;
	}

	let spriteDate = gulp.src(config.path.src + config.path.img.directoryName + '/sprites/*.png')
		.pipe(changed(config.path.dist))
		.pipe(plumber({
			errorHandler: function(err) {
				console.log(err);
				this.emit('end');
			}
		}))
		.pipe(spritesmith({
			imgName: 'sprite.png',
			cssName: '_sprite' + '.' + cssExt,
			imgPath: '/' + config.path.img.directoryName + '/sprite.png',
			cssFormat: cssType,
			padding: 10,
			cssVarMap: (sprite) => {
				sprite.name = config.setting.img.spritePrefix + sprite.name;
			}
		}));

	spriteDate.img
		.pipe(plumber({
			errorHandler: function(err) {
				console.log(err);
				this.emit('end');
			}
		}))
		.pipe(gulp.dest(config.path.dist + config.path.img.directoryName));

	spriteDate.css
		.pipe(plumber({
			errorHandler: function(err) {
				console.log(err);
				this.emit('end');
			}
		}))
		.pipe(gulp.dest(config.path.src + config.path.css.directoryName));
});