'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

function buildStyles() {
    return gulp.src('./assets/scss/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./assets/styles'));
}

exports.sass = buildStyles;
exports.watch = function () {
    gulp.watch('./assets/scss/**/*.scss', gulp.parallel('sass'));
};
