var gulp= require ("gulp");
var concat = require ("gulp-concat");
var cleanCss = require("gulp-clean-css");
var sass = require ("gulp-sass");
var rename= require ("gulp-rename");

gulp.task ("ron",function(){       //when you enter gulp kitty (npm package+task) in terminal it will print hello
    //console.log("hello");
    return gulp.src("main.scss")
    .pipe (sass())
    //.pipe (concat("min.css"))
    .pipe (rename("min.style.css"))
    .pipe (cleanCss())
    .pipe (gulp.dest ("./dist"));

});
