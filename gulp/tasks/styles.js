var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    nested = require('postcss-nested'),
    autoprefixer = require('autoprefixer'),
    cssImport = require('postcss-import'),
    cssvars = require('postcss-simple-vars'),
    mixins = require('postcss-mixins');

gulp.task('styles', function () {
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([cssImport, mixins, nested, cssvars, autoprefixer]))
        .on('error', function (errorInfo) {
            console.log(errorInfo.toString);
            this.emit('end');
        })
        .pipe(gulp.dest('./app/temp/styles'));
});