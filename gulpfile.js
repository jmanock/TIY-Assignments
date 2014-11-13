// put in root
var gulp = require('gulp'),
connect = require('gulp-connect'),
// put in the file you want to work with
wiredep = require('wiredep');

gult.task('wiredep', function(){
  wiredep({src:'index.html'});
});

gulp.task('bower',function(){
  gulp.watch('bower.json', ['wiredep']);
});
// stays with ^ wiredep 
gulp.task('connect', function(){
  connect.server({
    livereload: true
  });
});

gulp.task('reload', function(){
  gulp.src('./*.html')
  .pipe(connect.reload());
});

gulp.task('watch', function(){
  gulp.watch(['./*.html'],['reload']);
});

gulp.task('default', ['connect', 'watch']);
