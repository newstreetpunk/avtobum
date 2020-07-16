
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
		$('.Sort-Order a').click(function(e) {
			e.preventDefault();
		  
			var $this = $(this),
				sort = $this.parent().data('sort'),
				url = (location.hostname == 'localhost') ? 'arenda-mashin.html' : '/arenda-mashin/';
		  
			if ($this.parent().hasClass('Sort-Order_select')) {
				$this.parent().toggleClass('Sort-Order_up');
			} else {
				$('.Sort-Order').each(function(){
					$(this).removeClass('Sort-Order_select')
					$(this).removeClass('Sort-Order_up')
				});
				$this.parent().addClass('Sort-Order_select');
			}

			
			if($this.parent().hasClass('Sort-Order_up')) {
				getSorted('.product', sort, 'up');
				window.history.pushState({}, document.title, url+"?sort="+sort+"&order=up");
			} else {
				getSorted('.product', sort, 'down');
				window.history.pushState({}, document.title, url+"?sort="+sort+"&order=down");
			}
		});

		/* Первая сортировка, если есть параметры в URL */
		function firstSort() {
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
			}
			// console.log(['sort', sort]);
			if(sort.length == 2)
				getSorted('.product', sort[0], sort[1]);

			var pathname = window.location.pathname.split("/");
			// console.log("pathname : " + pathname);
		}
		firstSort();

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
			$('#btnname').val(btn_name);

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
		$('#callback-form #inputPhone').focusout(function(){
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

		/* Отправление формы захвата */
		$(document).on('submit','#frmwrapper form',function(ev){
			var frm = $('#frmwrapper form');
			$('#frmwrapper form #submit').prop( "disabled", true );
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

		/* ленивая загрузка картинок */
		lazyload();

		// $('.calcForm select').styler();

	});
	
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
			console.log([event, slick, image, imageSource]);
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
	
	// Select2 for Calc

	$('#select-model').select2({
		minimumResultsForSearch: -1,
		placeholder: 'Выбор автомобиля'
	});

	$('#select-model').on('select2:select', function (evt) {
		$('.form-footer-submit .btn').show(200);
	});


	$('.calc #select-model, .calc input[type=checkbox], .calc input[type=radio]').change(function() {
		calc();
	});

	// Select2 for Calc End

	// DAtaPicker
	// Зададим стартовую дату

	var today = new Date(),
		tomorrow = new Date(),
		$startPicker = $('#timepicker-actions-in'),
		$endPicker = $('#timepicker-actions-to');

	today.setMinutes(0);
	tomorrow.setMinutes(0);
	tomorrow.setDate(today.getDate() + 1);

	$startPicker.datepicker({
		timepicker: true,
		minDate: today,
		startDate: today,
		onSelect: function(fd, d, picker) {
			// Ничего не делаем если выделение было снято
			if (!d) return;
			calc();
		}
	});
	$startPicker.data('datepicker').selectDate(today);

	console.log($startPicker);

	$endPicker.datepicker({
		timepicker: true,
		minDate: today,
		startDate: tomorrow,
		onSelect: function(fd, d, picker) {
			// Ничего не делаем если выделение было снято
			if (!d) return;
			calc();
		}
	});
	$endPicker.data('datepicker').selectDate(tomorrow);

	// Собираем данные формы -> открываем второе модальное окно (форму)
	$('#form-calc').submit(function(){
		var data = $(this).serializeArray();

		var priceP = $('.rent_price #price-p span').text(),
			priceZ = $('.rent_price #price-z span').text();

		$('.rental-price-info span').text(priceP);
		$('.refund-info span').text(priceZ);

		$('.modal__calc-wrap').show();

		//console.log(data);
		return false;
	});

	// Закрытие модального окна
	$('.modal__calc-close, .overlay').click(function(){
		$(this).closest('.modal__calc-wrap').hide();
	});

	// Работа с TEXTAREA
	$('.custom-radio-check input').change(function(){
		var th = $(this),
			name = th.attr('name'),
			id = th.attr('id'),
			parent = th.closest('.location-block'),
			textarea = parent.children('#'+ name +'_text');
		
		if( id == name+'_office' ){
			textarea.removeAttr('placeholder').attr('readonly', true).val('Самара, Заводское шоссе, 11 , офис 106');
		}
		if( id == name+'_address' ){
			parent.children('#location_in_text').keydown(function(){
				localStorage.setItem('address', $(this).val());
			});

			parent.children('#location_to_text').keydown(function(){
				localStorage.setItem('address2', $(this).val());
			});

			var address = localStorage.getItem('address');
			var address2 = localStorage.getItem('address2');

			textarea.removeAttr('readonly').attr('placeholder', 'Введите адрес доставки').text(address).val(address);

			if (address2) {
				parent.children('#location_to_text').text(address2).val(address2);
			}
			
		}
		if( id == name+'_airport' ){
			textarea.removeAttr('placeholder').attr('readonly', true).val('Аэропорт Самара (Курумоч), лит26');
		}

	});

	function calc() {
		$('#price-p span')[0].innerText = Math.round(Math.random()*10000);
		$('#price-z span')[0].innerText = Math.round(Math.random()*10000);
	}

	function timeDiffCalc(){
		var date1 = $('#timepicker-actions-in').val();
		var date2 = $('#timepicker-actions-to').val();
		
		console.log(parseInt(date1));
		console.log(parseInt(date2));
	}
	timeDiffCalc();

}, jQuery);