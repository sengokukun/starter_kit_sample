import gulp from 'gulp'
import config from '../config'

gulp.task('watch', function () {
    gulp.watch(config.src + '/scss/**', ['sass']);
    gulp.watch(config.src + '/pug/**', ['pug']);
    gulp.watch(config.src + '/js/**', ['browserify']);
    gulp.watch(config.src + '/js/canvas.js', ['canvas']);
    gulp.watch(config.src + '/images/**/*.+(jpg|jpeg|gif|png|svg)', ['copyResource']);
});
