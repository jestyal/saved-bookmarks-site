'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var path = './assets/scss/styles.scss';

function buildStyles() {
    return gulp.src(path)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./assets/styles'));
}

exports.sass = buildStyles;
exports.watch = function () {
    gulp.watch(path, gulp.parallel('sass'));
};
