var gulp = require('gulp'),
    ts = require('gulp-typescript'),
    nodemon = require('gulp-nodemon');
    del = require('del');

var tsProject = ts.createProject('tsconfig.json');

gulp.task('compile', function () {
    return gulp.src('app/**/*.ts')
        .pipe(tsProject())
        .pipe(gulp.dest(tsProject.options.outDir));
});

gulp.task('compile:watch', function () {
    gulp.watch('app/**/*.ts', ['compile']);
});

gulp.task('clean', function() {
    del(['dist', 'app/**/*.js', 'app/**/*.d.ts']);
});

gulp.task('serve', function() {
    nodemon({
        'script': 'server.js'
    });
})