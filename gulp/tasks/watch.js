const gulp = require('gulp');
const watch = require('gulp-watch');
const browserSync = require('browser-sync').create();

const htmlPath = './app/index.html';

gulp.task('watch', () => {

  browserSync.init({
    nofify: false,
    server: {
      baseDir: "app"
    }
  })

  watch(htmlPath, () => {
    browserSync.reload();
  })

  watch('./app/assets/styles/**/*.css', () => {
    gulp.start('cssInject');
  })
})

gulp.task('cssInject', ['style'],() => {
  return gulp.src('./app/dist/styles.css')
    .pipe(browserSync.stream());
})