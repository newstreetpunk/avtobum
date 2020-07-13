let projects = {


	avtobum: {

		port: ++port,

		base: base.avtobum,
		dest: base.avtobum,

		styles: {
			src:	base.avtobum + '/' + preprocessor + '/main.*',
			
			watch:  [
				base.avtobum + '/' + preprocessor + '/**/*.'+preprocessor,
				base.avtobum + '/css/common.css',
			],
			dest:   base.avtobum + '/css',
			output: 'main.css',
		},

		scripts: {
			src: [
				base.avtobum + '/libs/jquery/dist/jquery-3.3.1.min.js',
				base.avtobum + '/libs/jquery.formstyler/jquery.formstyler.min.js',
				'node_modules/slick-carousel/slick/slick.min.js',
				base.avtobum + '/libs/lazyload/lazyload.js',
				base.avtobum + '/js/common.js', // Always at the end
			],
			dest:       base.avtobum + '/js',
			output:     'scripts.min.js',
		},

		code: {
			src: [
				base.avtobum  + '/**/*.{' + fileswatch + '}',
				'!' + base.avtobum + '/base/objs.json'
			],
		},
	},

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
	.pipe(header(forProd))
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

