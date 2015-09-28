var gulp = require('gulp');
var inject = require('gulp-inject');
var bowerFiles = require('main-bower-files');
var ts = require('gulp-typescript');

gulp.task('inject', function(){
    return gulp.src('index.html')
        .pipe(inject(gulp.src(bowerFiles(), {read: false}), {name: 'bower'}))
        .pipe(inject(gulp.src('src/**/*.css', {read: false})))
        .pipe(gulp.dest('./'));

});

gulp.task('ts', function(){
    return gulp.src(['src/**/*.ts', 'typings/tsd.d.ts'])
        .pipe(ts({ module: 'system' }))
        .pipe(gulp.dest('src/'))
});

gulp.task('watch', function(){
   gulp.watch('src/**/*.ts', ['ts']);
});

gulp.task('default', ['inject']);