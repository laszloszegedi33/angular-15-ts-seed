var gulp = require('gulp'),
    ts = require('gulp-typescript'),
    nodemon = require('gulp-nodemon');
    runSequence = require('run-sequence').use(gulp),
    del = require('del');

var tsProject = ts.createProject('tsconfig.json');

gulp.task('compile:ts', function () {
    return gulp.src('src/**/*.ts')
        .pipe(tsProject())
        .pipe(gulp.dest(tsProject.options.outDir));
});

gulp.task('copy:assets', function() {
    return gulp.src(["src/assets/**/*.*"])
        .pipe(gulp.dest("dist/assets"));
});

gulp.task('copy:html', function() {
    return gulp.src(["src/**/*.html"])
        .pipe(gulp.dest("dist"));    
});

gulp.task('copy:sysconf', function() {
    return gulp.src(["src/app/system.config.js"])
        .pipe(gulp.dest("dist/src/app"));    
});

gulp.task('watch', function () {
    gulp.watch('src/**/*.ts', ['compile:ts']);
    gulp.watch('src/assets/*.*', ['copy:assets']);
    gulp.watch('src/**/*.html', ['copy:html']);
});

gulp.task('clean', function() {
   del(['dist', 'src/**/*.js', 'src/**/*.d.ts', '!src/app/system.config.js']);
});

gulp.task('build', function(cb) {
    runSequence('clean', 'compile:ts', 'copy:assets', 'copy:html', 'copy:sysconf', cb);
})

gulp.task('server', function() {
    nodemon({
        'script': 'dist/src/server/server.js'
    });
})

gulp.task('start', function() {
    runSequence('build', 'watch', 'server');
});