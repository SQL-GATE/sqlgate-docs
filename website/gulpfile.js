'use strict';

// 필요한 모듈선언
const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');

function errorAlert(error) {
  notify.onError({
    title: 'Gulp Error',
    message: 'Check your terminal',
    sound: 'Purr',
  })(error); //Error Notification
  console.log(error.toString()); //Prints Error to Console
  this.emit('end'); //End function
}

/**
 * watch
 */
gulp.task('scss-watch', function() {
  gulp.watch(['./static/scss/**/*.scss'], ['scss']);
});

/**
 * SASS
 */
gulp.task('scss', function() {
  gulp
    .src('static/scss/custom.scss')
    .pipe(plumber({errorHandler: errorAlert}))
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./static/css'));
});

// 걸프 기본 타스크
gulp.task('default', ['scss-watch'], function() {
  return true;
});
