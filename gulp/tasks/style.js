const gulp = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssvars = require('postcss-simple-vars');
const nested = require('postcss-nested');
const cssImport = require('postcss-import');
const mixins = require('postcss-mixins');
const hexrgba = require('postcss-hexrgba');

const cssSourcePath = './app/assets/styles/styles.css';

gulp.task('style', () => {
  console.log('Something is being done with CSS');
  return gulp.src(cssSourcePath)
    .pipe(postcss([cssImport, mixins, cssvars, nested, hexrgba, autoprefixer]))
    .on('error', (error) => {
      console.log(error.toString());
      this.emit('end');
    })
    .pipe(gulp.dest('./app/dist'));
})