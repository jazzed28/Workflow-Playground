const gulp = require('gulp');
const watch = require('gulp-watch');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssvars = require('postcss-simple-vars');
const nested = require('postcss-nested');
const cssImport = require('postcss-import');

const htmlPath = './dist/index.html';
const cssPath = './app/assets/styles/style.css';

gulp.task('default', () => {
  console.log('Created gulp task');
})

gulp.task('html', () => {
  console.log('Something is being done with HTML');
})

gulp.task('style', () => {
  console.log('Something is being done with CSS');
  return gulp.src(cssPath)
    .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('./dist/'));
})

gulp.task('watch', () => {
  watch(htmlPath, () => {
    gulp.start('html');
  })

  watch(cssPath, () => {
    gulp.start('style');
  })
})