import gulp from 'gulp'
import sass from 'gulp-sass'
import autoprefixer from 'autoprefixer'
import sourcemaps from 'gulp-sourcemaps'
import postcss from 'gulp-postcss'
import plumber from 'gulp-plumber'
import rename from 'gulp-rename'
import notify from 'gulp-notify'
import config from '../config'

gulp.task('sass', function () {
  gulp.src(config.entryFiles.css)
    .pipe(sourcemaps.init())
    .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(postcss([autoprefixer()]))
    .pipe(rename({
      basename: "bundle",
    }))
    .pipe(sourcemaps.write("../sourcemaps"))
    .pipe(gulp.dest(config.destDirs.css));
});
