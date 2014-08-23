var gulp    = require('gulp');
var sass    = require('gulp-sass');
var concat  = require('gulp-concat');
var rename  = require('gulp-rename');
var cssmin  = require('gulp-minify-css');
var csslint = require('gulp-csslint');
var prefix  = require('gulp-autoprefixer');
var jshint  = require('gulp-jshint');
var uglify  = require('gulp-uglify');

gulp.task('scss', function() {
  return gulp.src('src/scss/basscss/basscss.scss')
    .pipe(sass())
    .pipe(prefix("last 1 version", "> 1%", "ie 8"))
    .pipe(csslint())
    .pipe(cssmin())
    .pipe(rename('c.min.css'))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('js', function() {
  return gulp.src('src/js/**/*.js')
    .pipe(jshint())
    .pipe(concat('j.min.js'))
    .pipe(gulp.dest('dist/js'))
});

gulp.task('default', ['scss', 'js']);
