var gulp = require('gulp');
var babel = require('gulp-babel');
var inject = require('gulp-inject');

gulp.task('default', function () {
	gulp.src('src/**/*.js')
		.pipe(babel())
		.pipe(gulp.dest('dist/'));
	gulp.src('src/**/*.css') //can be replaced to less
		.pipe(gulp.dest('dist/'));

	gulp.src('src/**/*.html')
		.pipe(inject(gulp.src(['dist/**/*.js', 'lib/**/*.js', 'dist/**/*.css', 'lib/**/*.css'], {read: false}), {relative: true}))
		.pipe(gulp.dest('public/pages'));
});