var gulp = require('gulp');
var notify = require("gulp-notify");
var plumber = require('gulp-plumber');
var concate = require('gulp-concat');
var browserSync = require('browser-sync');
var pug = require('gulp-pug');
var less = require('gulp-less');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');

//gulp.task('build', ['sass','default'] , function(){});

//sync compass


//gulp.series('tiny')


 
// build

gulp.task('buld',function(){
	var buildcss = gulp.src(['app/**/*.css'])
	.pipe(gulp.dest('build'))

	var buildlibs = gulp.src([
		'app/**/libr/**/',
		'app/**/fonts/**/',
		'app/**/img/**/'])
	.pipe(gulp.dest('build'))

	var buildjs = gulp.src([
		'app/**/js/**/*.js'])
	.pipe(gulp.dest('build'))

	var buildhtml = gulp.src([
		'app/**/**/*.html'])
	.pipe(gulp.dest('build'))
});







//Sass
gulp.task('sass', function(){
	return gulp.src('app/block/sass/main-basic.sass')
	.pipe(plumber({
		errorHandler: notify.onError(function(error){
			return {
				title: 'error-sass',
				message: error.message
			}
			})
		})) 
	.pipe(sourcemaps.init({loasMaps: true}))
	.pipe(sass.sync())  
	.pipe(concate('style.css'))
	.pipe(autoprefixer({
		browsers: ['last 2 versions'],
		cascade: false
		})) 
	.pipe(sourcemaps.write('maps'))
	.pipe(gulp.dest('app'))
	.pipe(browserSync.stream());
});

 

//less
gulp.task('less', function(){
	return gulp.src('app/block/less/main-basic.less')  
	.pipe(plumber({
		errorHandler: notify.onError(function(error){
			return {
				title: 'error-less',
				message: error.message
			}
			})
	}))
	.pipe(sourcemaps.init({loasMaps: true}))
	.pipe(less()) 
	.pipe(concate('style.css'))
	.pipe(autoprefixer({
		browsers: ['last 2 versions'],
		cascade: false
	}))
	.pipe(sourcemaps.write('maps'))
	.pipe(gulp.dest('app'))
	.pipe(browserSync.stream());
	});


//pug 
gulp.task('pug', function(){
	return gulp.src('app/block/pug/*.pug')
	.pipe(plumber({
		errorHandler: notify.onError(function(error){
			return {
				title: 'error-pug',
				message: error.message
			}
			})
	}))	
	.pipe(sourcemaps.init({loasMaps: true}))
	.pipe(pug({pretty:true})) 
	//.pipe(concate('index.html'))
	.pipe(sourcemaps.write('maps'))
	.pipe(gulp.dest('app'))
	.pipe(browserSync.stream());
	});





 



// js
gulp.task('js', function(){
	return gulp.src('app/block/jq/*.js')
	.pipe(plumber({
		errorHandler: notify.onError(function(error){
			return {
				title: 'error-js',
				message: error.message
			}
			})
	}))	
	.pipe(sourcemaps.init({loasMaps: true}))
	.pipe(concate('may_script.js'))
	.pipe(sourcemaps.write('./maps'))
	.pipe(gulp.dest('app/js'))
	.pipe(browserSync.stream());
	})



// Static server
gulp.task('browser-sync', ['pug' , 'less' , 'js'], function() {
	browserSync.init({
		server: { baseDir: "app" }
		});
	});



gulp.task('default', ['browser-sync'], function(){
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/*.css', browserSync.reload);
	gulp.watch('app/js/may_script.js', browserSync.reload);
	gulp.watch('app/block/pug/**/*.pug',['pug']);
	gulp.watch('app/block/jq/*.js',['js']);
	gulp.watch('app/block/sass/modules/*.sass',['sass'], browserSync.reload);
	gulp.watch('app/block/sass/*.sass',['sass']);
	gulp.watch('app/block/less/modules/*.less',['less'], browserSync.reload);
	gulp.watch('app/block/less/*.less',['less']);
});


