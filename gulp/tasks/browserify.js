import gulp from 'gulp'
import config from '../config'
import browserify from 'browserify'
import babelify from 'babelify'
import uglify from 'gulp-uglify'
import buffer from 'vinyl-buffer'
import source from 'vinyl-source-stream'

gulp.task('browserify', function () {
  browserify(config.entryFiles.js, { debug: true })
    .transform(babelify, config.babel)
    .bundle()
    .on("error", function (err) {
      console.log(`ERROR:${err.message}`);
    })
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest(config.destDirs.js))
});