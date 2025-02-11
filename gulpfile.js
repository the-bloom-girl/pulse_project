const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer'); // Додано імпорт

// Static Server
gulp.task('server', () => {
	browserSync.init({
		server: {
			baseDir: 'src',
		},
	});
});

gulp.task('styles', () =>
	gulp.src('src/sass/**/*.+(scss|sass)') // Враховує всі вкладені SCSS-файли
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(postcss([autoprefixer()]))
		.pipe(rename({
			prefix: '',
			suffix: '.min',
		}))
		// .pipe(autoprefixer({
		// 	browsers: ['last 2 version'],
		// 	cascade: false,
		// }))
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(gulp.dest('src/css')) // Збереження в папку src/css
		.pipe(browserSync.stream()), // Автоматичне оновлення CSS без перезавантаження сторінки
);

gulp.task('watch', () => {
	gulp.watch('src/sass/**/*.+(scss|sass)', gulp.series('styles'));
	gulp.watch('src/*.html').on('change', browserSync.reload);
});

gulp.task('default', gulp.parallel('server', 'watch', 'styles'));

