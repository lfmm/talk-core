const gulp = require('gulp');
const exec = require('child_process').exec;

/**
 * Build by running node with build.js.
*/
gulp.task('build', (callback) => {
  exec('node build.js', function (error, stdout, stderr) {
    console.log(stdout, stderr);
    callback(error)
  });
});

/**
 * Implements build with watch mode - for link library development
*/
gulp.task('build:watch', ['build'], () => {
  gulp.watch('src/**/*', ['build']);
});
