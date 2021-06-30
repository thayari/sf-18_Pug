var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var pug = require('gulp-pug');

gulp.task('sass', function () {
  return gulp.src('style/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('docs/style/'));
});

gulp.task('pug', function() {
  return gulp.src('pug/*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('docs/'));
})

gulp.task('watch', function () {
  gulp.watch('style/*.sass', gulp.series('sass'));
  gulp.watch('pug/**/*.pug', gulp.series('pug'));
});

gulp.task('default', gulp.series('sass', 'pug', 'watch'));