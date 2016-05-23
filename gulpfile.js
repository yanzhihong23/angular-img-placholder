'use strict';

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require("gulp-rename");

gulp.task('uglify', function() {
  return gulp.src('src/index.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('rename', ['uglify'], function() {
  return gulp.src('dist/index.js')
    .pipe(rename('index.min.js'))
    .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['rename']);

