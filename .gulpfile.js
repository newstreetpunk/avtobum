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
