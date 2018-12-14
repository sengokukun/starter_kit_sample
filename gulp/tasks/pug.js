import gulp from 'gulp';
import pug from 'gulp-pug';
import sourcemaps from 'gulp-sourcemaps'
import config from '../config'
import plumber from 'gulp-plumber'

gulp.task('pug', function buildHTML() {
  return gulp.src(config.entryFiles.html)
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(pug({
      pretty: true
    }))
    .pipe(sourcemaps.write("./assets/sourcemaps"))
    .pipe(gulp.dest(config.destDirs.html));
});
