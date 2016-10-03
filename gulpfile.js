//require module
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer');
    browserSync = require('browser-sync').create();


//gulp sass
var sass_Config ={}
//autoprefixer config
var autoprefixer_Config = {
    browsers: ['last 2 versions'],
    cascade: false
}
//browserSync config
gulp.task('browser-sync',function(){
  browserSync.init({
    server:{
            baseDir: "./"
        }

    //proxy: "你的域名或IP";
  });
  gulp.watch("**/*.html").on('change', browserSync.reload);
});


gulp.task('sass', function() {
    gulp.src('sass/style.scss')
        .pipe(sourcemaps.init())
        .pipe(autoprefixer(autoprefixer_Config))
        .pipe(sass(sass_Config))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('css'))
        .pipe(browserSync.reload({stream:true}));
})

gulp.task('sass:watch', function() {
    gulp.watch('sass/**/*.scss', ['sass']);
})


gulp.task('js',function(){
   gulp.src('js/**/*.js')
    .pipe(browserSync.reload({stream:true}));
})

gulp.task('js:watch',function(){
  gulp.watch('js/**/*.js',['js']);
})


gulp.task('default',['browser-sync','sass:watch','js:watch']);
