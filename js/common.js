var dataLayer = window.dataLayer || [];

$(function() {

	$( document ).ready(function() {

		//Hide Menu on Scroll
		var hideHeaderPos = 100;

		/* опускающийся хедер при прокрутке вверх */
		var prevScrollpos = window.pageYOffset;
		$(window).scroll( function() {
			var currentScrollPos = window.pageYOffset;
			if (currentScrollPos > hideHeaderPos) {
				if (prevScrollpos > currentScrollPos) {
					document.getElementById("header").classList.remove("hide");
					document.getElementById("header").classList.add("show");
				} else {
					document.getElementById("header").classList.remove("show");
					document.getElementById("header").classList.add("hide");
				}
				prevScrollpos = currentScrollPos;
				// $('.header').attr('style')
			} else {
				document.getElementById("header").classList.remove('show', 'hide');
			}
		});

		/* Мобильное меню при клике на бургер */
		$('.toggle-btn').click(function() {
			$(this).toggleClass('active');
			$('.header__menu').slideToggle(200);
		});

		/* ресайз заголовка когда изменяется размер окна, ээээ а че стилями нельзя? */
		function resizeW() {
			if ($(window).width() < 1200) {
				$('.header__menu').hide();
				$('.header__menu:hidden') || $('.toggle-btn').hasClass('active')
				$('.toggle-btn').hasClass('active') || $('.header__menu:visible')
				$('.header__menu ul li a').click(function() {
					$('.header__menu').slideUp(200);
					$('.toggle-btn').removeClass('active')
				});
				$('.toggle-btn').removeClass('active');
				$('html').removeAttr('style');
			} else {
				$('.header__menu').show();
			}
		};
		resizeW();
		$(window).resize(resizeW);


		/* Слайдер акций */
		$('.stock__slider.make').slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			// autoplay: true,
			nextArrow: '<butoon class="next"></button>',
			prevArrow: '<butoon class="prev"></button>',
			responsive: [
				{
				breakpoint: 992,
				settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 768,
					settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
				}

			]
		});

		/* Слайдер партнеров */
		$('.partners-slider.make').slick({
			infinite: true,
			slidesToShow: 5,
			slidesToScroll: 1,
			// autoplay: true,
			nextArrow: '<butoon class="next"></button>',
			prevArrow: '<butoon class="prev"></button>',
			responsive: [{
					breakpoint: 576,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 1
					}
				}
			]

		});

		/* добавление мобильной таблицы, если размер экрана меньше 767 */
		var switched = false;
		if (($(window).width() < 767) && !switched && document.getElementById('fixed-table-container_price')) {
			switched = true;

			var divs = document.querySelectorAll('#fixed-table-container_price'), i;

			for (i = 0; i < divs.length; ++i) {
			  divs[i].querySelector('table').classList = "";
			  divs[i].classList.add("fixed-table-container");
			  fixTable(divs[i]);
			}

		}

		/* Разворачивание списка "Посмотреть подробную информация" о машине */
		$('.toggle-more a').click(function(e) {
			e.preventDefault();

			var $this = $(this);

			if ($this.parent().next().hasClass('show')) {
				// hide current
				$this.addClass('collapsed');
				$this.parent().next().removeClass('show');
				$this.parent().next().slideUp(350);
				$this.parent().parent().parent().parent().children('.table-box.car-section').removeClass('show');
				$this.parent().parent().parent().parent().children('.table-box.car-section').slideUp(350);
			} else {
				// hide other
				/* решено было отключить, чтобы людей не бесило то, что всё закрывается и нужно открывать вновь * /
				$this.parent().parent().parent().parent().find('.product a.toggle').addClass('collapsed');
				$this.parent().parent().parent().parent().find('.product p.inner').removeClass('show');
				$this.parent().parent().parent().parent().find('.product p.inner').slideUp(350);
				$this.parent().parent().parent().parent().find('.product div.table-box.car-section').removeClass('show');
				$this.parent().parent().parent().parent().find('.product div.table-box.car-section').slideUp(350);
				/**/

				// open current

				if(typeof yaCounter28702351 !== 'undefined') yaCounter28702351.reachGoal('show_more_autoinfo');
				$this.removeClass('collapsed');
				$this.parent().next().toggleClass('show');
				$this.parent().next().slideToggle(350);
				$this.parent().parent().parent().parent().children('.table-box.car-section').toggleClass('show');
				$this.parent().parent().parent().parent().children('.table-box.car-section').slideToggle(350);
			}
		});

		/* Сортировка автопарка по */
		function getSorted(selector, dataName, order) {
			// var selector = '.product',
				// dataName = 'brand'
			/* */
			var toSort = document.querySelectorAll(selector),
				parent = toSort[0].parentNode;
			toSort = Array.prototype.slice.call(toSort, 0);
			toSort.sort(function(a, b) {
				switch(dataName) {
					case "brand":
					case "type":
						var aVal = a.getAttribute('data-'+dataName),
							bVal = b.getAttribute('data-'+dataName);
						break;
					default:
						var aVal = parseInt(a.getAttribute('data-'+dataName)),
							bVal = parseInt(b.getAttribute('data-'+dataName));
				}
				if(aVal === bVal) return 0;
				else if(aVal === "") return 1;
				else if(bVal === "") return -1;
				else if(order == 'down') return (aVal < bVal) ? -1 : (aVal > bVal) ? 1 : 0;
				else return (aVal < bVal) ? 1 : (aVal > bVal) ? -1 : 0;
			});
			parent.innerHTML = "";

			for(var i = 0, l = toSort.length; i < l; i++) {
				parent.appendChild(toSort[i]);
			}
			/* */
			// console.log([selector, dataName]);



			/* * /
			$(selector).sort(function(a, b) {
				var aVal = parseInt($(a).data(dataName));
				var bVal = parseInt($(b).data(dataName));
				if(order == 'down')
					return (aVal < bVal) ? -1 : (aVal > bVal) ? 1 : 0;
				else
					return (aVal < bVal) ? 1 : (aVal > bVal) ? -1 : 0;
			}).appendTo($(selector).parent());
			/* */

			/* * /
			$(selector).sort(function(a, b){
				var aVal = parseInt(a.getAttribute('data-'+dataName)),
					bVal = parseInt(b.getAttribute('data-'+dataName));
				if(order == 'down')
					return aVal - bVal;
				else
					return bVal - aVal;
			}).appendTo($(selector).parent());
			/**/
		}

		/* Действие кнопок сортировки автопарка */
		$('.sort-order a').click(function(e) {
			e.preventDefault();

			var $this = $(this),
				sort = $this.parent().data('sort'),
				url = (location.hostname == 'localhost') ? 'arenda-mashin.html' : '/arenda-mashin/';

			if ($this.parent().hasClass('sort-order_select')) {
				$this.parent().toggleClass('sort-order_up');
			} else {
				$('.sort-order').each(function(){
					$(this).removeClass('sort-order_select')
					$(this).removeClass('sort-order_up')
				});
				$this.parent().addClass('sort-order_select');
			}


			if($this.parent().hasClass('sort-order_up')) {
				getSorted('.product', sort, 'up');
				window.history.pushState({}, document.title, url+"?sort="+sort+"&order=up");
			} else {
				getSorted('.product', sort, 'down');
				window.history.pushState({}, document.title, url+"?sort="+sort+"&order=down");
			}
		});

		/* Первая сортировка, если есть параметры в URL */
		function getUrlParam(what) {
			if (window.location.hash != '') {
				var query = document.location.hash.substring(1);
			} else {
				var query = window.location.search.substring(1);
			}
			// console.log("query : " + query);

			var params = window.location.search.substring(1);
			// console.log("params : " + params);

			var vars = params.split("&");
			// console.log("vars : " + vars);

			var sort = [],
				sorts = ['brand', 'type', 'price', 'rank'],
				orders = ['up', 'down'];

			for (var i = 0; i < vars.length; i++) {
				var pair = vars[i].split("=");

				// console.log("pair : " + pair);

				if (pair[0] === 'sort' && sorts.indexOf(pair[1]) != -1) {
					sort.push(pair[1]);
				}
				if (pair[0] === 'order' && orders.indexOf(pair[1]) != -1) {
					sort.push(pair[1]);
				}
				if (pair[0] === what) {
					return pair[1];
				}
			}
			// console.log(['sort', sort]);
			if(sort.length == 2)
				getSorted('.product', sort[0], sort[1]);

			var pathname = window.location.pathname.split("/");
			// console.log("pathname : " + pathname);
			return null;
		}
		getUrlParam();

		/* создать куки */
		function createCookie(cookieName,cookieValue,daysToExpire)
		{
		  var date = new Date();
		  date.setTime(date.getTime()+(daysToExpire*24*60*60*1000));
		  document.cookie = cookieName + "=" + cookieValue + "; expires=" + date.toGMTString();
		}

		/* доступ к куки */
		function accessCookie(cookieName)
		{
		  var name = cookieName + "=";
		  var allCookieArray = document.cookie.split(';');
		  for(var i=0; i<allCookieArray.length; i++)
		  {
			var temp = allCookieArray[i].trim();
			if (temp.indexOf(name)==0)
			return temp.substring(name.length,temp.length);
		  }
			return "";
		}

		/* проверить куки */
		function checkCookie()
		{
		  var user = accessCookie("testCookie");
		  if (user!="")
			alert("Welcome Back " + user + "!!!");
		  else
		  {
			user = prompt("Please enter your name");
			num = prompt("How many days you want to store your name on your computer?");
			if (user!="" && user!=null)
			{
			createCookie("testCookie", user, num);
			}
		  }
		}

		/* если реальный сайт, то кнопка выбора города должна менять поддомен */
		if(window.location.host.indexOf('avtobum63.ru') != -1) {
			$("select.city").change(function(){
				$(this).find("option:selected").each(function(){
					//$('select').val($(this).attr("value"));
					var url="//";

					if($(this).attr("value")=="smr"){
						url += "avtobum63.ru";
					}
					if($(this).attr("value")=="cheb"){
						url += "cheboksary.avtobum63.ru";
					}
					if($(this).attr("value")=="ufa"){
						url += "ufa.avtobum63.ru";
					}
					if($(this).attr("value")=="nnov"){
						url += "nnovgorod.avtobum63.ru";
					}
					url += window.location.pathname;
					location.href = url;
				});
			})
		}

		// $( '.swipebox' ).swipebox();

		/* настройки галереи на детальной странице авто */
		if($('[data-fancybox="group"]').length != 0)
			$('[data-fancybox="group"]').fancybox({
				buttons : ["close"]
			});

		/* открытие окна Заказ звонка */
		if($('[data-src="#callback-form"]').length != 0)
			$('[data-src="#callback-form"]').fancybox({
				afterShow: function( instance, slide ) {

					// Tip: Each event passes useful information within the event object:

					// Object containing references to interface elements
					// (background, buttons, caption, etc)
					// console.info( instance.$refs );

					// Current slide options
					// console.info( slide.opts );

					// Clicked element
					// console.info( slide.opts.$orig );

					// Reference to DOM element of the slide
					// console.info( slide.$slide );
					var fb = document.querySelector('#callback-form');
					fb.querySelector('#frmwrapper').append(fb.querySelector('.fancybox-close-small'));
					// console.log([typeof slide.$slide, typeof slide.$slide[0]]);
					// console.info([instance, slide]);
					// console.info([fb, slide.src]);
					// fb.find('#frmwrapper').append(fb.find('.fancybox-close-small'));

				}
			});


		/* просмотр видео в отзыва в открывающемся окне */
		if($('.embed-responsive.video').length != 0)
			$('.embed-responsive.video').fancybox({
				openEffect  : 'none',
				closeEffect : 'none',
				helpers : {
					media : {}
				}
			});

		/* эм, что-то должно было происходить при клике на кнопки брони, аааа... открывался веня, это когда не работали формы захвата родные на сайте */
		$('.callback, .call, .question, .bron').click(function(event) {
			/* * /
			if(typeof yaCounter28702351 !== 'undefined') yaCounter28702351.reachGoal('open_venyoo_callclickhovermenu');
			if($('#pv_head_wrapper').length) {
				$('#pv_head_wrapper').click();
			}
			if($('div[data-goal="callclickhovermenu"').length) {
				$('div[data-goal="callclickhovermenu"').click();
			}
			/**/
		});

		/* передается данных кнопки в форму захвата */
		$('.callback, .call, .question, .bron').click(function(){
			var btn_name = $(this).attr('data-name'),
				btn_class = $(this).attr('data-class');
			$('#callback-form .btnname').val(btn_name);

			$('#callback-form form').attr('data-class', btn_class);
		});

		/* отослать цель в ГА, Метрику и dataLayer */
		function sendGoal(goal, title) {
			if(typeof yaCounter28702351 !== 'undefined') yaCounter28702351.reachGoal(goal);
			if(typeof ga !== 'undefined') ga('send', 'pageview', '/virtual/'+goal);
			dataLayer.push({
				'event':'VirtualPageView',
				'virtualPageURL':'/virtual/'+goal,
				'virtualPageTitle' : title
			});


		}
		$('.call').click(function(){
			sendGoal('zvonok_click', 'click callback btn');
		});
		$('.bron').click(function(){
			sendGoal('reserv_click', 'click reserv btn');
		});
		$('.question').click(function(){
			sendGoal('vopros_click','click vopros btn');
		});
		$('#callback-form .inputPhone, #callback-form .inputName').focusout(function(){
			if($(this).val().length >= 5) {
				switch($('#callback-form form').attr('data-class')) {
					case "call":
						sendGoal('zvonok_nabor','write smth callback phone');
						break;
					case "bron":
						sendGoal('reserv_dannih','write smth reserv phone');
						break;
					case "question":
						sendGoal('vopros_nabor','write smth vopros phone');
						break;
					default:
				}
			}
		});
		$('#callback-form form').submit(function(){
			switch($(this).attr('data-class')) {
				case "call":
					sendGoal('zvonok_good','send callback info');
					break;
				case "bron":
					sendGoal('reserv_good','send reserv info');
					break;
				case "question":
					sendGoal('vopros_good','send vopros info');
					break;
				default:
			}
		});
		$('a[data-class="calc"]').click(function(){
			sendGoal('calcform_click','click calc btn');
		});
		$('#calcwrapper form .inputPhone, #calcwrapper form .inputName').focusout(function(){
			if($(this).val().length >= 3) {
				sendGoal('calcform_nabor','write calc contact');
			}
		});

		/* Отправление формы захвата */
		$(document).on('submit','#frmwrapper form',function(ev){
			var frm = $('#frmwrapper form');
			$('#frmwrapper form button[type="submit"]').prop( "disabled", true );
			/* * /
			$.get('/form_callme', frm_data, function (data) {
				 $('#frmwrapper form').remove();
				 $('#frmwrapper').html( data );
				});
			/**/
			/* */
			$.ajax({
				url: '/form_callme',
				type: 'post',
				data: frm.serialize(),
				success: function (data) {
					$('#frmwrapper form').remove();
					$('#frmwrapper').html( data );
				},
				error: function(status) {
					console.log(status);
				}
			});
			/**/
			ev.preventDefault();
		});

		/* Отправление формы калькулятора */
		$(document).on('submit','#calcwrapper form',function(ev){
			sendGoal('calcform_good','send calc data');
			var frm = $('#calcwrapper form');
			$('#calcwrapper form button[type="submit"]').prop( "disabled", true );
			$.ajax({
				url: '/form_calc',
				type: 'post',
				data: frm.serialize(),
				success: function (data) {
					$('#calcwrapper form').remove();
					$('#calcwrapper').html( data );
				},
				error: function(status) {
					console.log(status);
				}
			});
			/**/
			ev.preventDefault();
		});


		/* ленивая загрузка картинок */
		lazyload();

		// $('.calcForm select').styler();


	/* мобильная таблица прайслиста */
	function fixTable(container) {
		// Store references to table elements
		var thead = container.querySelector('thead');
		var tbody = container.querySelector('tbody');

		// Style container
		container.style.overflow = 'auto';
		container.style.position = 'relative';

		// Add inline styles to fix the header row and leftmost column
		function relayout() {
			var ths = [].slice.call(thead.querySelectorAll('th'));
			var tbodyTrs = [].slice.call(tbody.querySelectorAll('tr'));

			/**
			 * Remove inline styles so we resort to the default table layout algorithm
			 * For thead, th, and td elements, don't remove the 'transform' styles applied
			 * by the scroll event listener
			 */
			tbody.setAttribute('style', '');
			thead.style.width = '';
			thead.style.position = '';
			thead.style.top = '';
			thead.style.left = '';
			thead.style.zIndex = '';
			ths.forEach(function(th) {
				th.style.display = '';
				th.style.width = '';
				th.style.position = '';
				th.style.top = '';
				th.style.left = '';
			});
			tbodyTrs.forEach(function(tr) {
				tr.setAttribute('style', '');
			});
			[].slice.call(tbody.querySelectorAll('td'))
				.forEach(function(td) {
					td.style.width = '';
					td.style.position = '';
					td.style.left = '';
				});

			/**
			 * Store width and height of each th
			 * getBoundingClientRect()'s dimensions include paddings and borders
			 */
			var thStyles = ths.map(function(th) {
				var rect = th.getBoundingClientRect();
				var style = document.defaultView.getComputedStyle(th, '');
				return {
					boundingWidth: rect.width,
					boundingHeight: rect.height,
					width: parseInt(style.width, 10),
					paddingLeft: parseInt(style.paddingLeft, 10)
				};
			});

			// Set widths of thead and tbody
			var totalWidth = thStyles.reduce(function(sum, cur) {
				return sum + cur.boundingWidth;
			}, 0);
			tbody.style.display = 'block';
			tbody.style.width = totalWidth + 'px';
			thead.style.width = totalWidth - thStyles[0].boundingWidth + 'px';

			// Position thead
			thead.style.position = 'absolute';
			thead.style.top = '0';
			thead.style.left = thStyles[0].boundingWidth + 'px';
			thead.style.zIndex = 10;

			// Set widths of the th elements in thead. For the fixed th, set its position
			ths.forEach(function(th, i) {
				th.style.minWidth = thStyles[i].width + 'px';
				th.style.width = thStyles[i].width + 'px';
				if (i === 0) {
					th.style.position = 'absolute';
					th.style.top = '0';
					th.style.left = -thStyles[0].boundingWidth + 'px';
				}
			});

			// Set margin-top for tbody - the fixed header is displayed in this margin
			tbody.style.marginTop = thStyles[0].boundingHeight + 'px';

			// Set widths of the td elements in tbody. For the fixed td, set its position
			tbodyTrs.forEach(function(tr, i) {
				tr.style.display = 'block';
				tr.style.paddingLeft = thStyles[0].boundingWidth + 'px';
				[].slice.call(tr.querySelectorAll('td'))
					.forEach(function(td, j) {
						td.style.minWidth = thStyles[j].width + 'px';
						td.style.width = thStyles[j].width + 'px';
						if (j === 0) {
							td.style.position = 'absolute';
							td.style.left = '0';
						}
					});
			});
		}

		// Initialize table styles
		relayout();

		// Update table cell dimensions on resize
		window.addEventListener('resize', resizeThrottler, false);
		var resizeTimeout;
		function resizeThrottler() {
			if (!resizeTimeout) {
				resizeTimeout = setTimeout(function() {
					resizeTimeout = null;
					relayout();
				}, 500);
			}
		}

		// Fix thead and first column on scroll
		container.addEventListener('scroll', function() {
			thead.style.transform = 'translate3d(0,' + this.scrollTop + 'px,0)';
			var hTransform = 'translate3d(' + this.scrollLeft + 'px,0,0)';
			thead.querySelector('th').style.transform = hTransform;
			[].slice.call(tbody.querySelectorAll('tr > td:first-child'))
				.forEach(function(td, i) {
					td.style.transform = hTransform;
				});
		});

		/**
		 * Return an object that exposes the relayout function so that we can
		 * update the table when the number of columns or the content inside columns changes
		 */
		return {
			relayout: relayout
		};
	}

	/* плавная прокрутка страницы * /
	setTimeout(function() {
		if (location.hash) {
			// we need to scroll to the top of the window first, because the browser will always jump to the anchor first before JavaScript is ready, thanks Stack Overflow: http://stackoverflow.com/a/3659116
			window.scrollTo(0, 0);
			target = location.hash.split('#');
			smoothScrollTo($('#' + target[1]));
		}
	}, 1);

	// taken from: https://css-tricks.com/snippets/jquery/smooth-scrolling/
	$('a[href*="#"]')
		// Remove links that don't actually link to anything
		.not('[href="#"]')
		.not('[href="#0"]').click(function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			smoothScrollTo($(this.hash));
			return false;
		}
	});

	function smoothScrollTo(target) {
		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

		if (target.length) {
			$('html,body').animate({
				scrollTop: target.offset().top
			}, 1000);
		}
	}
	/**/





	var slideWrapper = $(".main-slider"),
		iframes = slideWrapper.find('.embed-player'),
		lazyImages = slideWrapper.find('.slide-image'),
		lazyCounter = 0;

	// POST commands to YouTube or Vimeo API
	function postMessageToPlayer(player, command){
		if (player == null || command == null) return;
		player.contentWindow.postMessage(JSON.stringify(command), "*");
	}

	// When the slide is changing
	function playPauseVideo(slick, control){
		var currentSlide, slideType, startTime, player, video;

		currentSlide = slick.find(".slick-current");
		slideType = currentSlide.attr("class").split(" ")[1];
		player = currentSlide.find("iframe").get(0);
		startTime = currentSlide.data("video-start");

		if (slideType === "vimeo") {
			switch (control) {
				case "play":
					if ((startTime != null && startTime > 0 ) && !currentSlide.hasClass('started')) {
						currentSlide.addClass('started');
						postMessageToPlayer(player, {
							"method": "setCurrentTime",
							"value" : startTime
						});
					}
					postMessageToPlayer(player, {
						"method": "play",
						"value" : 1
					});
					break;
				case "pause":
					postMessageToPlayer(player, {
						"method": "pause",
						"value": 1
					});
					break;
			}
		} else if (slideType === "youtube") {
			switch (control) {
				case "play":
					postMessageToPlayer(player, {
						"event": "command",
						"func": "mute"
					});
					postMessageToPlayer(player, {
						"event": "command",
						"func": "playVideo"
					});
					break;
				case "pause":
					postMessageToPlayer(player, {
						"event": "command",
						"func": "pauseVideo"
					});
					break;
			}
		} else if (slideType === "video") {
			video = currentSlide.children("video").get(0);
			if (video != null) {
				if (control === "play"){
					video.play();
				} else {
					video.pause();
				}
			}
		}
	}

	// Resize player
	function resizePlayer(iframes, ratio) {
		if (!iframes[0]) return;
		var win = $(".main-slider"),
			width = win.width(),
			playerWidth,
			height = win.height(),
			playerHeight,
			ratio = ratio || 16/9;

		iframes.each(function(){
			var current = $(this);
			if (width / ratio < height) {
				playerWidth = Math.ceil(height * ratio);
				current.width(playerWidth).height(height).css({
					left: (width - playerWidth) / 2,
					 top: 0
					});
			} else {
				playerHeight = Math.ceil(width / ratio);
				current.width(width).height(playerHeight).css({
					left: 0,
					top: (height - playerHeight) / 2
				});
			}
		});
	}

	// DOM Ready
	$(function() {
		// Initialize
		slideWrapper.on("init", function(slick){
			slick = $(slick.currentTarget);
			setTimeout(function(){
				playPauseVideo(slick,"play");
			}, 1000);
					resizePlayer(iframes, 16/9);
			// if(window.innerWidth>window.innerHeight)
			// else
					// resizePlayer(iframes, 9/16);
			// resizePlayer(iframes, window.innerWidth/window.innerHeight);
		});
		slideWrapper.on("beforeChange", function(event, slick) {
			slick = $(slick.$slider);
			playPauseVideo(slick,"pause");
		});
		slideWrapper.on("afterChange", function(event, slick) {
			slick = $(slick.$slider);
			playPauseVideo(slick,"play");
		});
		slideWrapper.on("lazyLoaded", function(event, slick, image, imageSource) {
			// console.log([event, slick, image, imageSource]);
			image.parent().css('background-image', 'url("' + imageSource + '")');
			image.hide();
			image.parent().addClass('show');
			lazyCounter++;
			if (lazyCounter === lazyImages.length){
				lazyImages.addClass('show');
				// slideWrapper.slick("slickPlay");
			}
		});


		var arrow = '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225 c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></svg>';

		//start the slider
		slideWrapper.slick({
			rows: 0,
			// fade:true,
			autoplaySpeed: 4000,
			lazyLoad: "progressive",
			// lazyLoad: "ondemand",
			speed: 600,
			arrows: true,
			dots: true,
			cssEase: "cubic-bezier(0.87, 0.03, 0.41, 0.9)",
			prevArrow: '<button class="arrow prev-arrow">'+arrow+'</button>',
			nextArrow: '<button class="arrow next-arrow">'+arrow+'</button>',
		});
	});

	// Resize event
	$(window).on("resize.slickVideoPlayer", function(){
		resizePlayer(iframes, 16/9);
		// if(window.innerWidth>window.innerHeight)
		// else
		// resizePlayer(iframes, 9/16);
		// resizePlayer(iframes, window.innerWidth/window.innerHeight);
	});


	/* калькулятор начало */

	/* Select2 for Calc */

	function placeholder(){
		var arr = {
			selectmodel : 'Выбор автомобиля'
		}

		$('select').each(function(){
			id = $(this).attr('id');
			id = id.replace('-', '');

			$.each(arr, function(k, v){
				if (k == id) {
					return v;
					console.log(v);
				}
			//return placehold;
			});
		});
	}

	placeholder();


	$('#select-model').select2({
		minimumResultsForSearch: -1,
		width: 'resolve',
		placeholder: 'Выбор автомобиля'
	});

	var model = getUrlParam('model');
	if(model != null) {
		$('#select-model').val(model);
		$('#select-model').trigger('change');
	}

	/* Select2 for Calc End */

	// DAtaPicker
	// Зададим стартовую дату
	// почему-то если делать startDate зависимый от today, то timePicker работает не корректно

	var today = new Date(),
		startDate = new Date(),
		tomorrow = new Date(),
		$startPicker = $('#timepicker-actions-in'),
		startPicker,
		$endPicker = $('#timepicker-actions-to'),
		endPicker,
		$model = $('#select-model');
		startPicker = $startPicker.data('datepicker');
		endPicker = $endPicker.data('datepicker');
	/*
	*/
	if ($startPicker.length) {

		today.setMinutes(0);
		today.setSeconds(0);

		startDate.setMinutes(0);
		startDate.setSeconds(0);
		startDate.setHours(today.getHours() + 1);

		startPicker = $startPicker.datepicker({
			timepicker: true,
			minDate: today,
			startDate: startDate,
			onSelect: function(fd, d, picker) {
				// Ничего не делаем если выделение было снято
				// if (!d) return;

				// picker.date = d;

				// console.log([fd, d, picker, startPicker.currentDate]);

				if(endPicker) calc();
			},
			onShow: function(inst, animationCompleted) {
				endPicker.hide();
			}
		}).data('datepicker');
		// startPicker.selectDate(startDate);
	}

	if ($endPicker.length) {

		tomorrow.setMinutes(0);
		tomorrow.setSeconds(0);
		tomorrow.setDate(tomorrow.getDate() + 1);
		tomorrow.setHours(tomorrow.getHours() + 1);

		endPicker = $endPicker.datepicker({
			timepicker: true,
			minDate: today,
			startDate: startDate,
			onSelect: function(fd, d, picker) {
				// Ничего не делаем если выделение было снято
				// if (!d) return;

				// picker.date = d;

				// console.log([fd, d, picker, endPicker.currentDate]);

				if(startPicker) calc();
			},
			onShow: function(inst, animationCompleted) {
				startPicker.hide();
			}
		}).data('datepicker');
		// endPicker.selectDate(tomorrow);
	}


	// Собираем данные формы -> открываем второе модальное окно (форму)
	$('#form-calc').submit(function(){

		sendGoal('calcform_zabron','click zabron calc btn');

		$('.modal__calc-wrap').show();

		//console.log(data);
		return false;
	});

	// Закрытие модального окна
	$('.modal__calc-close, .overlay').click(function(){
		$(this).closest('.modal__calc-wrap').hide();
	});

	// Работа с TEXTAREA
	$('.calc .custom-radio-check input').change(function(){
		var $this = $(this),
			name = $this.attr('name'),
			id = $this.attr('id'),
			parent = $this.closest('.location-block'),
			textarea = parent.children('#'+ name +'_text'),
			place = $this.data('place'),
			price = $this.data('price');

		switch(id) {
			case name+'_office':
			case name+'_airport':
				textarea.removeAttr('placeholder').attr('readonly', true).val(place);
				break;
			case name+'_address':
				parent.children('#location_in_text').keydown(function(){
					localStorage.setItem('address_in', $(this).val());
				});

				parent.children('#location_to_text').keydown(function(){
					localStorage.setItem('address_to', $(this).val());
				});

				var address_in = localStorage.getItem('address_in');
				var address_to = localStorage.getItem('address_to');

				textarea.removeAttr('readonly').attr('placeholder', 'Введите адрес доставки').text(address_in).val(address_in);

				if (address_to) {
					parent.children('#location_to_text').text(address_to).val(address_to);
				}
				break;
		}

	});

	// функция калькулятора
	function calc() {
		if($model.val() != null && startPicker.lastSelectedDate > 0 && endPicker.lastSelectedDate > 0 && startPicker.lastSelectedDate < endPicker.lastSelectedDate) {

		// если необходимые поля выбраны
		$('.form-footer-submit .btn').show(200);

		var rentTime = Math.abs(startPicker.lastSelectedDate - endPicker.lastSelectedDate) / 36e5,
			countDay = Math.floor(rentTime / 24),
			koff = rentTime % 24,
			model = $model.val(),
			orderData = {},
			zalog = pr_zalog[model],
			dop_servs = [],
			dopSumma = 0,
			price = 0;

		if(countDay > 0) {
			if (koff > 5) {
				// Если аренда больше 1 суток + 5 часов - то это 2 суток.
				countDay += 1;
			}
			else {
				// Если аренда больше 1 суток (24 часа), но меньше 1 сутки + 5 часов (29 часов) - то сумма аренды 1 сутки + 100 рублей/час (не важно какая машина)
				price += (100 * koff);
			}
		}
		if(rentTime < 3) {
			// минимум 3 часа
			price += pr_0[model]*3;
		}
		else if(rentTime > 2 && rentTime < 9) {
			// Если аренда меньше 8 часов - то ставка почасовая (у каждой машины своя)
			price += pr_0[model] * rentTime;
		}
		else if(countDay == 1 || (rentTime > 8 && countDay == 0)) {
			// Если аренда больше 8 часов - то это 1 сутки
			price += pr_1[model];
		}
		else if(countDay > 1 && countDay < 4) {
			price += pr_2[model] * countDay;
		}
		else if(countDay > 3 && countDay < 7) {
			price += pr_3[model] * countDay;
		}
		else if(countDay > 6 && countDay < 16) {
			price += pr_4[model] * countDay;
		}
		else if(countDay > 15 && countDay < 31) {
			price += pr_5[model] * countDay;
		}
		else if(countDay > 30) {
			price += pr_week[model] * countDay;
		}

		if([6,7,20,21,22].includes(startPicker.lastSelectedDate.getHours())) {
			price += 500;
		}
		else if([23,0,1,2,3,4,5].includes(startPicker.lastSelectedDate.getHours())) {
			price += 1000;
		}
		if([6,7,20,21,22].includes(endPicker.lastSelectedDate.getHours())) {
			price += 500;
		}
		else if([23,0,1,2,3,4,5].includes(endPicker.lastSelectedDate.getHours())) {
			price += 1000;
		}

		$('.dop-uslugi input[type=checkbox]:checked').each(function(index, el) {
			var $this = $(this),
				dopPrice = $this.data('pr'),
				dopEdIzm = $this.data('ed'),
				dopDTP = pr_dtp[model],
				title = $this.attr('value');

			switch(dopEdIzm) {
				case "рубли":
					dopSumma += dopPrice;
					break;
				case "рубли/сутки":
					if(dopPrice == 'protection') {
						// значит нужно взять цену защиты от ДТП из прайса, для каждого авто своя
						dopSumma += dopDTP * Math.max(countDay, 1);
					} else {
						dopSumma += dopPrice * Math.max(countDay, 1);
					}
					break;
				case "% от стоимости проката":
					dopSumma += ( dopPrice / 100 ) * price;
					break;
				default:
			}

			var str = $this.parent().find('label').text().trim();
			if (str) dop_servs.push(str);


		});
		if (dop_servs.length) {
			$('.modal__calc-right .dop-uslugi').show();
			$('.modal__calc-right .dop-uslugi-info').text(dop_servs.join(' / '));
		} else {
			$('.modal__calc-right .dop-uslugi').hide();
			$('.modal__calc-right .dop-uslugi-info').text("");
		}

		$('.calc .custom-radio-check input').each(function(index, el) {
			if(this.checked){
				var $this = $(this),
					placePrice = $this.data('price');

				price += placePrice;
			}
		});


		price += parseInt(dopSumma);

		orderData['Автомобиль'] = $model.find('option:selected').text();
		if (dop_servs.length) {
			orderData['Доп услуги'] = dop_servs.join(' / ');
		}
		orderData['Срок аренды'] = startPicker.lastSelectedDate.toLocaleString() + " — " + endPicker.lastSelectedDate.toLocaleString();
		orderData['Место доставки авто'] = $('#location_in_text').val();
		orderData['Место сдачи авто'] = $('#location_to_text').val();
		orderData['Стоимость проката'] = Math.round(price);
		orderData['Возвратный залог'] = Math.round(zalog);

		if(orderData['Место доставки авто'].trim() == "") {
			orderData['Место доставки авто'] = 'Доставка по адресу / ЖД';
		}
		if(orderData['Место сдачи авто'].trim() == "") {
			orderData['Место сдачи авто'] = 'Доставка по адресу / ЖД';
		}

		$('#calcwrapper .calcorderdata').val(JSON.stringify(orderData));

		$('.modal__calc-right .model-info').text(orderData['Автомобиль']);
		$('.modal__calc-right .rent-info').text(orderData['Срок аренды']);
		$('.modal__calc-right .location-in-info').text(orderData['Место доставки авто']);
		$('.modal__calc-right .location-to-info').text(orderData['Место сдачи авто']);
		$('.modal__calc-right .rental-price-info span').text(orderData['Стоимость проката']);
		$('.modal__calc-right .refund-info span').text(orderData['Возвратный залог']);
		$('#price-p span').text(orderData['Стоимость проката']);
		$('#price-z span').text(orderData['Возвратный залог']);


		} else {
			$('.modal__calc-right .rental-price-info span').text(0);
			$('.modal__calc-right .refund-info span').text(0);
			$('#price-p span').text(0);
			$('#price-z span').text(0);
			$('.form-footer-submit .btn').hide(200);
			return;
		}
	}

	$('.calc #select-model, .calc input[type=checkbox], .calc input[type=radio]').change(function() {
		sendGoal('calcform_check','change calc data');
		calc();
	});
	$('#location_in_text, #location_to_text').bind('input propertychange', function() {
		calc();
		sendGoal('calcform_check','change calc data');
	});
	/* калькулятор конец */


	/* фильтр начало */

	$('#select-car-brand').select2({
		minimumResultsForSearch: -1,
		placeholder: 'Марка автомобиля',
		allowClear: true
	});

	$('#select-body-type').select2({
		minimumResultsForSearch: -1,
		placeholder: 'Тип кузова',
		allowClear: true
	});

	/*
	var $filter_car_brand = $('#sort_filter #select-car-brand'),
		$filter_body_type = $('#sort_filter #select-body-type'),
		$filter_checkbox = $('#sort_filter .custom-check input[type=checkbox]:checked');

	$('#sort_filter #select-car-brand, #sort_filter #select-body-type, #sort_filter .custom-check input[type=checkbox]').change(function(event) {
		console.log(1);
		// filter_car_list();
	});
	*/

	$('#sort_filter').on('change', function() {

		let data = $('#sort_filter').serializeArray();

		$('.product').removeClass("show");
		$('.product').removeClass("notshow");
		if(data.length == 0) {
			$('.product').show();
			$('.utp').show();
		} else {
			let arr = [
				{ name: "select-car-brand", data: 'brand', value: "" },
				{ name: "select-body-type", data: 'type', value: "" },
				{ name: "gearbox-at", data: 'gearbox', value: "1" },
				{ name: "gearbox-mt", data: 'gearbox', value: "0" },
				{ name: "towbar", data: 'farkop', value: "1" },
				{ name: "conditioner", data: 'conditioner', value: "нет" }
			];

			$.each(arr, function(index1, prop){

				$('.product').removeClass(prop);

				let propArr = data.filter(function(elem) {
					return elem.name === prop.name;
				});

				$.each(propArr, function(index2, el) {

					// console.log([data, arr, prop, propArr, el]);
					switch(el.name) {
						case "select-car-brand":
							attr = 'data-brand="'+el.value+'"';
							break;
						case "select-body-type":
							attr = 'data-type="'+el.value+'"';
							break;
						case "gearbox-at":
							attr = 'data-gearbox="1"';
							break;
						case "gearbox-mt":
							attr = 'data-gearbox="0"';
							break;
						case "towbar":
							attr = 'data-farkop="1"';
							break;
						case "conditioner":
							attr = 'data-conditioner!="нет"';
							break;
						default:
					}
					let selector = '.product['+attr+']';
					console.log([selector, $(selector)]);
					$(selector).addClass("show");
					$(selector).addClass(prop.data);
				});
				if(propArr.length>0) {
					console.log(['notshow', $('.product[data-'+prop.data+']:not(.'+prop.data+')')]);
					$('.product[data-'+prop.data+']:not(.'+prop.data+')').addClass("notshow");
				}
			});

			$('.product.show:not(.notshow)').show();
			$('.product.notshow').hide();
			$('.product:not(.show)').hide();
			$('.utp').hide();
		}
	});

	function filter_car_list() {

	}

	/* фильтр конец */

	});

}, jQuery);