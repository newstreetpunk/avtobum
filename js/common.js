//Hide Menu on Scroll

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").setAttribute(
   "style", "top: 0; box-shadow: 0 3px 40px rgba(0,0,0,.3);");
  } else {
    document.getElementById("header").setAttribute(
   "style", "top: -150px; box-shadow: 0 3px 30px transparent;");
  }
  prevScrollpos = currentScrollPos;
}
//



$(function(){
	
	//удаление атрибута 'style'
	$(window).scroll(function(){
		if($(this).scrollTop() > 50){
			$('.header').attr('style')
		}else{
			$('.header').removeAttr('style');
		}
	});
	//

	//Мобильное меню
	$('.toggle-btn').click(function(){
		$(this).toggleClass('active');
		$('.header__menu').slideToggle(200);
	});
	function resizeW(){
		if($(window).width() < 1200){
			$('.header__menu').hide();
			$('.header__menu:hidden') || $('.toggle-btn').hasClass('active')
			$('.toggle-btn').hasClass('active') || $('.header__menu:visible')
				$('.header__menu ul li a').click(function(){
					$('.header__menu').slideUp(200);
					$('.toggle-btn').removeClass('active')
				});
			$('.toggle-btn').removeClass('active');
			$('html').removeAttr('style');
		}else{
			$('.header__menu').show();
		}	
	};
	resizeW();
	$(window).resize(resizeW);
	//

	// Слайдеры
	$('.stock__slider').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		autoplay: true,
		nextArrow: '<butoon class="next"></button>',
		prevArrow: '<butoon class="prev"></button>',
		responsive: [
    	{
      	breakpoint: 992,
      	settings: {
        slidesToShow: 1,
		slidesToScroll: 1
      	}
    	}]
	});

	$('.partners-slider').slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		nextArrow: '<butoon class="next"></button>',
		prevArrow: '<butoon class="prev"></button>'
	});


}, jQuery);