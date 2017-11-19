var gulp = require ('gulp');
var sass = require ('gulp-sass');
var sourcemaps = require ('gulp-sourcemaps');
var browserSync = require ('browser-sync').create();

//also need to install watch

gulp.task('css', function(){
	return gulp.src('challenge-0/sass/styles.scss') //return gulp.src('challenge-0/sass/**/*.scss')

	.pipe(sass())
	.pipe(sass({outputStyle: 'extended'}).on('error', sass.logError))
	.pipe(gulp.dest('challenge-0/css'))
});

gulp.task('watch', ['css'], function(){
	gulp.watch('challenge-0/sass/styles.scss', ['css']);

});