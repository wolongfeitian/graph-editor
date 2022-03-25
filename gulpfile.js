var gulp = require('gulp');
var uglify = require('gulp-uglify');
var clean = require('gulp-clean');

gulp.task('clean',function(){
    return gulp.src('dist/',{read: false})
        .pipe(clean({force: true}));
})

gulp.task('uglify', function(cb) {
    gulp.src('src/**/*.js')

    .pipe(uglify())

    .pipe(gulp.dest('dist'))
    cb();
});


gulp.task('move', function(cb) {
    gulp.src('src/**/!(*.js)')
    .pipe(gulp.dest('dist'))
    cb();
});

gulp.task('default', 
    gulp.series('clean','uglify', 'move', )
)