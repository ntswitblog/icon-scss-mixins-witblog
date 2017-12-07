var scssPath = './sample/scss/**/*.scss';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
	browserSync = require('browser-sync');

gulp.task('sass', function(){
    gulp.src(scssPath)
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(gulp.dest('./sample/css'))
		.pipe(browserSync.reload({ stream : true }));
});

gulp.task('watch', function() {
	gulp.watch(scssPath, ['sass']);
});

gulp.task('browserSync', function () {
	browserSync.init({
		port : 3000,
		server: {
			baseDir: './'
		},
		startPath: "/sample/sample.html"
	});
});

gulp.task('default', ['browserSync','watch']);
