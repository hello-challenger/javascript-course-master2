const jshint = require('gulp-jshint');
const gulp = require('gulp');
var uglify = require('gulp-uglify');
var pipeline = require('readable-stream').pipeline;

gulp.task('default', function () {
  return gulp.src('./js/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
   , uglify(), gulp
  .dest('dest'));
});
