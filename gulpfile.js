const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const sourcemaps = require('gulp-sourcemaps');

function styles() {
    return gulp.src('src/styles/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/css'));
}

function images() {
    return gulp.src('src/images/**/*')
        .pipe(gulp.dest('dist/images'));
}

exports.default = gulp.parallel(styles, images);
exports.styles = styles;
exports.watch = function() {
    gulp.watch('src/styles/*.scss', gulp.parallel(styles));
}