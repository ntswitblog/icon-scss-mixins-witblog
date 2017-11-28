var scssPath = './sample/scss/**/*.scss';

var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('sass', function(){
    gulp.src(scssPath)
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(gulp.dest('./sample/css'));
});

gulp.task('watch', function() {
	gulp.watch(scssPath, ['sass']);
});
gulp.task('default', ['sass']);
