const gulp = require('gulp');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify-es').default;
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

const cssFiles = [
	'./view/scss/style.scss',
	'./view/scss/media.scss',
];

const jsFiles = [
	'./view/js/script.js'
];

function styles(){
	return gulp.src(cssFiles)
		.pipe(sass().on('error', sass.logError))
		.pipe(concat('main.css'))
		.pipe(autoprefixer({
			browsers: ['> 0.1%']
		}))
		.pipe(cleanCSS({
			level: 2
		}))
		.pipe(gulp.dest('./'))
		.pipe(browserSync.stream())
}
function scripts(){
	return gulp.src(jsFiles)
				.pipe(concat('main.js'))
				.pipe(uglify({
					toplevel: true
				}))
				.pipe(gulp.dest('./'))
				.pipe(browserSync.stream())
}
function reload(done) {
  browserSync.reload();
  done();
}

function watch(){
	browserSync.init({
        proxy: 'lpg.simf',
        notify: false
	});

	gulp.watch('./view/scss/*.scss',styles);
	gulp.watch('./view/js/*.js',scripts);
	gulp.watch('./*.php',reload);
}

gulp.task('styles', styles);
gulp.task('scripts', scripts);
gulp.task('watch', watch);