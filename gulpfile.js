var gulp = require('gulp');
var exec = require('child_process').exec;
var webserver = require('gulp-webserver');
var fs = require('fs');

var path = {
    scripts: 'src/app',
    templates: 'src/app/**/*.html'
};

gulp.task('serve', function(cb) {
    exec('node app.js', function(err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('serve', function(cb) {
    exec('webpack', function(err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('webserver', function() {
    gulp.src('bundle')
        .pipe(webserver({
            livereload: true,
            open: 'http://localhost:8000/'
        }));
});

gulp.task('dev', ['webserver']);