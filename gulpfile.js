var gulp = require('gulp');
var minify = require('gulp-csso');
var concat = require('gulp-concat');

gulp.task('minify',function(){
    gulp.src('css/*.css')
        .pipe(concat())
        .pipe(minify())
        .pipe(gulp.dest('build/css'))
});