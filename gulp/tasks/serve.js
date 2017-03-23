// serve serves files from the /dist directory

var gulp = require('gulp'),
    connect = require('gulp-connect'),
    config = require('../config');

gulp.task('serve', function () {
  connect.server({
    root: '.',
    port: 8000,
    livereload: true
  });
});
