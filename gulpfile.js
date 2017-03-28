'use strict';

var gulp     = require('gulp'),
svgSprite    = require('gulp-svg-sprite'),
plumber      = require('gulp-plumber'),
baseDir      = 'src/images/icons',   // <-- Set to your SVG base directory
svgGlob      = '*.svg',       // <-- Glob to match your SVG files
outDir       = 'out',     // <-- Main output directory
config       = {
    "dest": "src/images/icon",
    "log": "info",
    "svg": {
      sprite: "src/images/sprite.svg"
    },
    cssFile: 'css/sprite.css', //輸出 css 路徑
    selector: "icons-%f",  // 前綴詞
};

gulp.task('svgsprite', function() {
    return gulp.src('./src/images/icons/*.svg')
        .pipe(plumber())
        .pipe(svgSprite(config)).on('error', function(error){ console.log('error: ', error); })
        .pipe(gulp.dest(outDir));
});
