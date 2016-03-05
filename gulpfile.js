'use strict';

var gulp = require('gulp'),
	del = require('del'),
	runSequence = require('run-sequence'),
	plumber = require('gulp-plumber'),
	inject = require('gulp-inject'),
	watch = require('gulp-watch'),
	sass = require('gulp-sass'),
	uglify = require('gulp-uglify'),
	naturalSort = require('gulp-natural-sort'),
	webserver = require('gulp-webserver');

// clean
gulp.task('clean', function () {
	del(['dist/**/*.css', 'dist/**/*.js']).then(function (paths) {
		console.log('Deleted files and folders:\n', paths.join('\n'));
	});
});

// sass
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
		.pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

// js compress
gulp.task('uglify', function() {
  return gulp.src('dis/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

// file injector
gulp.task('inject', function () {
	gulp.src('index.html')
		.pipe(inject(gulp.src('dist/**/*.css', { 
			read: false 
		})
		.pipe(naturalSort()), { 
			relative: true 
		}))
		.pipe(gulp.dest('.'));
});

// watch files changes
gulp.task('watch', function () {
  gulp.watch('sass/**/*.scss', ['sass']);
});

// webserver
gulp.task('webserver', function() {
  gulp.src('.')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});

// default
gulp.task('default', function () {
	runSequence(
		'clean',
		'sass',
		'inject',
		'watch',
		'webserver'
		);
});