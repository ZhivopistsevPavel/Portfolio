// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

const wayToMainScss = 'scss/style.scss';
const cssFolder = 'css/';

gulp.task('sass', function(cb) {
  gulp
    .src(wayToMainScss)
    .pipe(sass())
    .pipe(
      gulp.dest(cssFolder)
    );
  cb();
});


gulp.task(
  'default',
  gulp.series('sass', function(cb) {
    gulp.watch('**/*.scss', gulp.series('sass'));
    cb();
  })
);