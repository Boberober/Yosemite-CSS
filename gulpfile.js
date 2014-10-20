var gulp = require('gulp'),
  autoprefixer = require('gulp-autoprefixer'),
  sass = require('gulp-sass'),
  webserver = require('gulp-webserver'),
  watch = require('gulp-watch'),
  rename    = require('gulp-rename');

gulp.task('styles', function() {
  return gulp.src('src/site.scss')
          .pipe(sass())
          .pipe(autoprefixer())
          .pipe(rename('style.css'))
          .pipe(gulp.dest('demo/'));
});
gulp.task('webserver', function() {
  return gulp.src('demo/')
    .pipe(webserver({
      open: true
    }));
});

gulp.task('watch', function() {
  return gulp.watch(['src/*'], ['styles']);
});

gulp.task('default', ['styles', 'webserver']);


