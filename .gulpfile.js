// VARIABLES & PATHS
let preprocessor = 'sass', // Preprocessor (sass, scss, less, styl)
    fileswatch   = 'html,htm,txt,json,md,woff2,php', // List of files extensions for watching & hard reload (comma separated)
    pageversion  = 'html,htm,php', // List of files extensions for watching change version files (comma separated)
    imageswatch  = 'jpg,jpeg,png,webp,svg', // List of images extensions for watching & compression (comma separated)
    online       = true, // If «false» - Browsersync will work offline without internet connection
    basename     = require('path').basename(__dirname),
    forProd      = [
					'/**',
					' * @author Alexsab.ru',
					' */',
					''].join('\n');

const { src, dest, parallel, series, watch, task } = require('gulp'),
	sass           = require('gulp-sass')(require('sass')),
	cleancss       = require('gulp-clean-css'),
	concat         = require('gulp-concat'),
	browserSync    = require('browser-sync').create(),
	uglify         = require('gulp-uglify-es').default,
	autoprefixer   = require('gulp-autoprefixer'),
	newer          = require('gulp-newer'),
	rsync          = require('gulp-rsync'),
	del            = require('del'),
	connect        = require('gulp-connect-php'),
	header         = require('gulp-header'),
	notify         = require('gulp-notify'),
	// rename         = require('gulp-rename'),
	// merge          = require('merge-stream'),
	// version        = require('gulp-version-number'),
	// revAll         = require('gulp-rev-all'),
	replace        = require('gulp-replace');

if(typeof projects == 'undefined') 
	global.projects = {};
if(typeof port == 'undefined') 
	global.port = 8100;


projects.avtobum = {

	port: ++port,

	base: basename,
	dest: basename,

	styles: {
		src:	basename + '/' + preprocessor + '/main.*',
		
		watch:  [
			basename + '/' + preprocessor + '/**/*',
			basename + '/css/common.css',
		],
		dest:   basename + '/css',
		output: 'main.css',
	},

	scripts: {
		src: [
			basename + '/libs/jquery/dist/jquery-3.3.1.min.js',
			basename + '/libs/air-datepicker-master/js/datepicker.min.js',
			basename + '/libs/select2/js/select2.min.js',
			'node_modules/slick-carousel/slick/slick.js',
			basename + '/libs/lazyload/lazyload.js',
			basename + '/js/common.js', // Always at the end
		],
		dest:       basename + '/js',
		output:     'scripts.min.js',
	},

	code: {
		src: [
			basename  + '/**/*.{' + fileswatch + '}',
			'!' + basename + '/base/objs.json'
		],
	},

	forProd: [
		'/**',
		' * @author https://github.com/newstreetpunk',
		' * @editor https://github.com/alexsab',
		' */',
		''].join('\n'),
}



/* avtobum BEGIN */

// Local Server
function avtobum_browsersync() {
	connect.server({
		port: projects.avtobum.port,
		base: projects.avtobum.base,
	}, function (){
		browserSync.init({
			// server: { baseDir: projects.avtobum.base + '/' },
			proxy: '127.0.0.1:' + projects.avtobum.port,
			notify: false,
			online: online
		});
	});
};

// Custom Styles
function avtobum_styles() {
	return src(projects.avtobum.styles.src)
	.pipe(eval(preprocessor)({ outputStyle: 'expanded' }).on("error", notify.onError()))
	.pipe(concat(projects.avtobum.styles.output))
	.pipe(autoprefixer({ grid: true, overrideBrowserslist: ['last 10 versions'] }))
	// .pipe(cleancss( {level: { 1: { specialComments: 0 } } })) // Optional. Comment out when debugging
	.pipe(dest(projects.avtobum.styles.dest))
	.pipe(browserSync.stream())

};


// Scripts & JS Libraries
function avtobum_scripts() {
	return src(projects.avtobum.scripts.src)
	.pipe(concat(projects.avtobum.scripts.output))
	// .pipe(uglify()) // Minify js (opt.)
	.pipe(header(projects.avtobum.forProd))
	.pipe(dest(projects.avtobum.scripts.dest))
	.pipe(browserSync.stream())
};

function avtobum_watch() {
	watch(projects.avtobum.styles.watch, avtobum_styles);
	watch(projects.avtobum.scripts.src, avtobum_scripts);

	watch(projects.avtobum.code.src).on('change', browserSync.reload);
};

exports.avtobum = parallel(avtobum_styles, avtobum_scripts, avtobum_browsersync, avtobum_watch);


/* avtobum END */

