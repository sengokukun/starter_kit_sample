import gulp from 'gulp'
import config from '../config'
import imagemin from 'gulp-imagemin';
import pngquant from 'imagemin-pngquant';
import mozjpeg from 'imagemin-mozjpeg';
import changed from 'gulp-changed';

// 画像データのコピー
gulp.task('copyResource', () => {
  gulp.src(config.entryFiles.image)
    .pipe(changed(config.destDirs.image))
    .pipe(imagemin([
      pngquant({
        quality: 50,
        speed: 1,
        floyd: 0
      }),
      mozjpeg({
        quality: 50,
        progressive: true
      }),
      imagemin.svgo(),
      imagemin.optipng(),
      imagemin.gifsicle()
    ]))
    .pipe(gulp.dest(config.destDirs.image));
});
