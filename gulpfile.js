var gulp = require('gulp'),
  connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root: 'Maquetacion',
    livereload: true
  });
});

gulp.task('assets', function () {
  gulp.src('Maquetacion/**/*')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['Maquetacion/**/*'], ['assets']);
});

gulp.task('default', ['connect', 'watch']);
