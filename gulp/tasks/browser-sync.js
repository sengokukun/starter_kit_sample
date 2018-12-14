import gulp from 'gulp'
import browserSync from 'browser-sync'
import config from '../config'

gulp.task('browser-sync', function () {
  browserSync({
    server: {
      baseDir: config.docroot
    }
  })
  gulp.watch(config.docroot + "/**/**", function () {
    browserSync.reload();
  });
});
