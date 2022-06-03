'use strict'

const {src,dest,watch,series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const concatCss = require('gulp-concat-css');
var plumber = require('gulp-plumber');
var coffee = require('gulp-coffee');





sass.compiller = require('node-sass');

exports.sass = function (){
    return src(['./src/styles/main.scss','./src/styles/adaptive.scss'])
        .pipe(sass().on('error',sass.logError))
        .pipe(concatCss("main.css"))
        .pipe(cssmin())
        .pipe(rename({suffix:'.min'}))
        .pipe(dest('./dist'));
};



exports.sassWatch = function (){
    watch('./src/styles/*.scss', series('sass'));
}
// .pipe(plumber)({
//     errorHandler: notify.onerror(err => ({
//         title:'ERROR SASS Compilation',
//         message:err.message
//     }))
// });
// gulp.src('./src/*.ext')
//     .pipe(plumber())
//     .pipe(coffee())
//     .pipe(dest('./dist'));