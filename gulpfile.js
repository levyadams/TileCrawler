const gulp = require('gulp');
//browser loader
var browserSync = require('browser-sync').create();
//webp images for optimization on some browsers
const del = require('del');
//run sequence to make sure each gulp command completes in the right order.
const runSequence = require('run-sequence');

// =======================================================================// 
// !                Default and bulk tasks                                //        
// =======================================================================//  

//main task for building production dir
gulp.task('build', function (callback) {
    runSequence('clean','scripts'), callback
});

//delete build to start over from scratch
gulp.task('clean', function () {
    return del.sync('build');
});

// =======================================================================// 
//                  Gulp tasks                                            //        
// =======================================================================//  

gulp.task('scripts', function (callback) {
    runSequence('watch', 'browse', callback);
});
gulp.task('watch', (['copy-html', 'copy-js']), function () {
    gulp.watch('./*.html', ['copy-html']);
    gulp.watch('./*.js', ['copy-js']);
});

// =======================================================================// 
//                  copy stuff                                            //        
// =======================================================================// 

gulp.task('copy-js', function () {
    gulp.src('./*.js')
        .pipe(gulp.dest('build/'))
        .pipe(browserSync.reload({
                    stream: true
                }));
});

gulp.task('copy-html', function () {
    gulp.src('./*.html')
        .pipe(gulp.dest('build/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

// =======================================================================// 
//                   Server                                               //        
// =======================================================================//  

gulp.task('browse', function () {
    browserSync.init({
        server: {
            baseDir: 'build'
        },
    })
})