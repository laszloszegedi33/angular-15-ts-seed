var gulp = require('gulp'),
    ts = require('gulp-typescript');

var tsProject = ts.createProject('tsconfig.json');

gulp.task('compile', function () {
    return gulp.src('app/**/*.ts')
        .pipe(tsProject())
        .pipe(gulp.dest('app'));
});