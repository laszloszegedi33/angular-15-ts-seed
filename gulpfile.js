var gulp = require('gulp'),
    ts = require('gulp-typescript'),
    gulpCopy = require('gulp-copy');

var tsProject = ts.createProject('tsconfig.json');

gulp.task('compile', function () {
    return gulp.src('app/**/*.ts')
        .pipe(tsProject())
        .pipe(gulp.dest('dist'));
});

gulp.task('copy:assets', function () {
    return gulp.src(['app/**/*.html', 'app/**/*.js'])
        .pipe(gulpCopy('dist', { prefix: 1 }));
});

var connect = require('connect'),
    serveStatic = require('serve-static'),
    gutil = require('gulp-util');

var FOLDER_DEST = './dist',
    PORT_SERVER = process.env.PORT || 8888;

var middlewareStatic = serveStatic(FOLDER_DEST);

gulp.task('serve', function(next) {
    var server = connect();
    server
        .use(middlewareStatic)
        .use(function(req, res, next) {
            var url = req.url;
            gutil.log(url);
            next();
        })
        .listen(PORT_SERVER, next);
});