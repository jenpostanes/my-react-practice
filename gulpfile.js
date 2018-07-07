'use strict';

// dependencies
var gulp      = require('gulp');
var sass      = require('gulp-sass');
var minifyCSS = require('gulp-clean-css');
var rename    = require('gulp-rename');
var newer     = require('gulp-newer');


var SCSS_SRC  = './src/styles/**/*.scss';

// build
var SCSS_DEST = './src/dist/css';


// compile SCSS
gulp.task('compile_scss', function(){

  return gulp.src(SCSS_SRC)
    .pipe(newer(SCSS_DEST))
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(rename({ suffix: '.min'}))
    .pipe(gulp.dest(SCSS_DEST));
})


// detect any changes
gulp.task('watch', function(){
  gulp.watch(SCSS_SRC, ['compile_scss']);
})

gulp.task('default', ['watch']);
