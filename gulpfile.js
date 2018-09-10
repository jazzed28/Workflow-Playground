const gulp = require('gulp');
const watch = require('gulp-watch');

gulp.task('default', () => {
  console.log('Created gulp task');
})

gulp.task('html', () => {
  console.log('Something is being done with HTML');
})

gulp.task('style', () => {
  console.log('Something is beign done with CSS STYLE');
})

gulp.task('watch', () => {
  watch('./index.html', () => {
    gulp.start('html');
  })

  watch('./style.css', () => {
    gulp.start('style');
  })
})