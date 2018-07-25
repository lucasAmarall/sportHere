var gulp = require('gulp');
var minify = require('gulp-csso');
gulp.task('minifyCss',function(){
    gulp.src('css/*.css')
        .pipe(minify())
        .pipe(gulp.dest('build/'))
});