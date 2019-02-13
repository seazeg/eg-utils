let gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename') 

// js文件处理
gulp.task('jsmin', function () {
    return gulp.src('./dist/GTools.js')
        .pipe(uglify({ mangle: true}))
        .pipe(rename({
            prefix: "", // 前缀
            suffix: ".min", // 后缀
            extname: ".js" // 扩展名
        }))
        .pipe(gulp.dest('./dist/'))
});