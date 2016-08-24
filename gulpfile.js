var gulp = require('gulp');
var exec = require('child_process').exec;
var webserver = require('gulp-webserver');
var fs = require('fs');

var path = {
    styles: 'node_modules/angular-material/angular-material.min.css',
    indexHtml: 'src/index.html'
};

gulp.task('serve', ['webpack', 'copyStyles', 'copyIndex'], function(cb) {
    exec('node app.js', function(err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('webpack', function(cb) {
    exec('webpack', function(err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('copyIndex', function () {
    return gulp.src(path.indexHtml)
        .pipe(gulp.dest('bundle'));
});

gulp.task('copyStyles', function () {
    return gulp.src(path.styles)
        .pipe(gulp.dest('bundle'));
});

gulp.task('start', ['serve']);