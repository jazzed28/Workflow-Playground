const gulp = require('gulp');
const watch = require('gulp-watch');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssvars = require('postcss-simple-vars');
const nested = require('postcss-nested');

gulp.task('default', () => {
  console.log('Created gulp task');
})

gulp.task('html', () => {
  console.log('Something is being done with HTML');
})

gulp.task('style', () => {
  return gulp.src('./style.css')
    .pipe(postcss([cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('./dist/'));
})

gulp.task('watch', () => {
  watch('./index.html', () => {
    gulp.start('html');
  })

  watch('./style.css', () => {
    gulp.start('style');
  })
})