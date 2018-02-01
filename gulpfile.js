var gulp = require('gulp'),
    ts = require('gulp-typescript'),
    ngAnnotate = require('gulp-ng-annotate');

var tsProject = ts.createProject('tsconfig.json');

gulp.task('annotate', function () {
    return gulp.src('app/**/*.js')
        .pipe(ngAnnotate())
        .pipe(gulp.dest('app'));
});

gulp.task('compile', function () {
    return gulp.src('app/**/*.ts')
        .pipe(tsProject())
        .pipe(gulp.dest('app'));
});