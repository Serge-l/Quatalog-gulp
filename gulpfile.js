const { src,dest, parallel,series} = require('gulp');
const gulp = require('gulp');
const sass = require('gulp-sass');
const stylelint = require('gulp-stylelint');
const browserSync = require('browser-sync'); //automatically refresh browser
const gulpStylelint = require('gulp-stylelint');

function browsersync() {
    browserSync.init({
        server:{ baseDir: "./"},
        online: true,
    });
}

function style() {

    return gulp.src('./css/**/*.scss')        //found file 
        .pipe(stylelint({
            reporters: [
                {
                    formatter: 'string',
                    console: true,
                    "gulp-stylelint": "^13.0.0",
                    "stylelint": "^13.11.0",
                    "stylelint-config-recess-order": "^2.3.0",
                    "stylelint-config-standard": "^20.0.0",
                },
            ],
        }))
        .pipe(sass())                               //convert it
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream())


}

function lintCss() {
    return src('./css/**/*.scss')
        .pipe(Stylelint({
            reporters: [
                {
                    formatter: 'string',
                    console: true
                }
            ]
        }));
}


function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./css/**/*.scss', style);
    gulp.watch('./*html').on('change', browserSync.reload);
}

exports.style        = style;
exports.lintCss      = lintCss;
exports.watch        = watch;
exports.browsersync  = browsersync;


