//Hide Menu on Scroll

$(function() {

    $( document ).ready(function() {
        
        var prevScrollpos = window.pageYOffset;
        $(window).scroll( function() {
            var currentScrollPos = window.pageYOffset;
            if (currentScrollPos > 50) {
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

        //Мобильное меню
        $('.toggle-btn').click(function() {
            $(this).toggleClass('active');
            $('.header__menu').slideToggle(200);
        });

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


        // Слайдеры
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
    		      	breakpoint: 576,
    		      	settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
    	    	}
                }

        	]
        });

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


        function createCookie(cookieName,cookieValue,daysToExpire)
        {
          var date = new Date();
          date.setTime(date.getTime()+(daysToExpire*24*60*60*1000));
          document.cookie = cookieName + "=" + cookieValue + "; expires=" + date.toGMTString();
        }

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
        
        if($('[data-fancybox="group"]').length != 0)
            $('[data-fancybox="group"]').fancybox({
                buttons : ["close"]
            });


        if(window.location.href.indexOf("https://avtobum63.ru/dev.html") != -1) {
        /**/
        //$("#stillHaveQuestions").hide();  
        $(".questions").click(function show_popup() {
            $("#stillHaveQuestions").fadeIn(500);
            $('#slideout').fadeIn();
        }); 
            
        
        $(".review").hide();
        $(".callback").click(function show_popup() {
            $(".review").fadeIn(500);
        });
        $(".popup_close").click(function() {
            $(".review").fadeOut(300);
        });
        $('#calcBron').click(function(){
            var valueDop = '';
            $('#avto_param').val($('#marka option:selected').html());
            $('#srok_param').val($('#srok').val());
            $('input[type=checkbox]:checked').each(function() {
                valueDop = valueDop + $(this).val() + ', ';
            });
            $('#list_param').val(valueDop);
        });

        $('.call').click(function(){
            $('#slideout').fadeIn();
            $('#callback').fadeIn();
        });
        
        
        $(".questions, .call-keys").click(function() {
            $("#stillHaveQuestions").fadeIn();
            $('#slideout').fadeIn();
        }); 
        
        $('#calcBron').click(function(){
            //$('#pricesform').fadeIn();
            $('#calculator').stop(true, true).fadeOut(function(){
                window.calc();
                $("#new_order").fadeIn();
            });
            $('#slideout').fadeIn();
        });

        $('#new_order form').submit(function(event) {
            event.preventDefault();
            var form = $(this);
            var phone_el = form.find('input[name="phone"]');
            phone_el.removeClass('error');
            if (!phone_el.val()) {
                phone_el.addClass('error');
                return;
            }
            var approve = form.find('input[name="agree"]');
            approve.removeClass('error');
            if (!approve.is(':checked')) {
                approve.addClass('error');
                return;
            }
            var form_msg = $(this).serialize();
            $.ajax({
                type: "POST",
                url: "/assets/templates/site/send.php",
                data: form_msg,
                success: function(response) {
                    if (response == "ok") {
                        $('#new_order').fadeOut();
                        $('#thank').fadeIn();
                    }
                },
                complete: function() {
                    console.log(arguments);
                }
            });
        });

        $('.new_order__right__back').click(function(e){
            e.preventDefault();
            $('#new_order').stop(true, true).fadeOut(function(){
                $("#calculator").fadeIn();
            });
        });

        $('.header-banner, .visible_mobile').click(function(){
            $('#slideout').fadeIn();
            $('#calculator').fadeIn();
        });
    
        $('body').on('click','.product .bron, .bronInfo .bron',function(){
            $('#slideout').fadeIn();
            $('#feedback').fadeIn();
                var num=$(this).attr('rel');
                $('#avtonum').val(num);
            });
        $('.bronCar').click(function(){
            $('#slideout').fadeIn();
            $('#order').fadeIn();
            var num=$(this).attr('rel');$('#avtonum').val(num);
        });


        
        $('.close').click(function(){
            $('#slideout').fadeOut();
            $('.feedback').fadeOut();
            $('#thank').fadeOut();
            $('#thank_review').fadeOut();
            $('#thank_callback').fadeOut();
            $('#thank_feedback').fadeOut();
            $('#thank_question').fadeOut();
            $('#calculator').fadeOut();
            $('#new_order').fadeOut();
        });

        $('.close-w').click(function() {
            $('#pricesform').fadeOut();
        });

        $('#slideout').click(function(){
            $('#slideout').fadeOut();
            $('.feedback').fadeOut();
            $('#thank').fadeOut();
            $('#thank_question').fadeOut();
            $('#calculator').fadeOut();
            $('#pricesform').fadeOut();
            $('#new_order').fadeOut();
        });

        $('.bronInfo .bron').click(function(){
            //console.log('test1');
            if(typeof yaCounter28702351 !== 'undefined') yaCounter28702351.reachGoal('reserv_click');
            if(typeof ga !== 'undefined') ga('send', 'pageview', '/virtual/reserv_click');
        });
        
        $('#form-five input, #form-five textarea').focusout(function(){
            if($(this).val().length >= 3){
                //console.log('test2');
                if(typeof yaCounter28702351 !== 'undefined') yaCounter28702351.reachGoal('reserv_dannih');
                if(typeof ga !== 'undefined') ga('send', 'pageview', '/virtual/reserv_dannih');
            }
        });
        
        $('#form-five .submit').click(function(){
            //console.log('test3');
            if(typeof yaCounter28702351 !== 'undefined') yaCounter28702351.reachGoal('reserv_good');
            if(typeof ga !== 'undefined') ga('send', 'pageview', '/virtual/reserv_good');
        });     
        
        $('#form-seven input, #form-seven textarea').focusout(function(){
            if($(this).val().length >= 3){
                //console.log('test2');
                if(typeof yaCounter28702351 !== 'undefined') yaCounter28702351.reachGoal('reserv_dannih');
                if(typeof ga !== 'undefined') ga('send', 'pageview', '/virtual/reserv_dannih');
            }
        });
        
        $('#form-seven .submit').click(function(){
            //console.log('test3');
            if(typeof yaCounter28702351 !== 'undefined') yaCounter28702351.reachGoal('reserv_good');
            if(typeof ga !== 'undefined') ga('send', 'pageview', '/virtual/reserv_good');
        }); 
        
        $('.header-banner, .visible_mobile').click(function(){
            //console.log('test4');
            if(typeof yaCounter28702351 !== 'undefined') yaCounter28702351.reachGoal('calcform_click');
            if(typeof ga !== 'undefined') ga('send', 'pageview', '/virtual/calcform_click');

            $('body').addClass('fixed');

        }); 
        $('#calculator .form a.close, #slideout, #new_order a.close, .new_order__left button').on('click', function(){
            $('body').removeClass('fixed');
        });     
         
        $('#rent-start-date, #rent-end-date, input[type=checkbox], #marka, #rent-start-time, #rent-end-time').change(function(){
            //console.log('test5');
            if(typeof yaCounter28702351 !== 'undefined') yaCounter28702351.reachGoal('calcform_check');
            if(typeof ga !== 'undefined') ga('send', 'pageview', '/virtual/calcform_check');
        });

        $('.location-tab .tabnav a').click(function(){
            //console.log('test5');
            if(typeof yaCounter28702351 !== 'undefined') yaCounter28702351.reachGoal('calcform_check');
            if(typeof ga !== 'undefined') ga('send', 'pageview', '/virtual/calcform_check');
        });

        $('.form #calcBron').click(function(){
            //console.log('test6');
            if(typeof yaCounter28702351 !== 'undefined') yaCounter28702351.reachGoal('calcform_zabron');
            if(typeof ga !== 'undefined') ga('send', 'pageview', '/virtual/calcform_zabron');
        });     

        $('#new_order form input').focusout(function(){
            if($(this).val().length >= 3){
                //console.log('test7');
                if(typeof yaCounter28702351 !== 'undefined') yaCounter28702351.reachGoal('calcform_nabor');
                if(typeof ga !== 'undefined') ga('send', 'pageview', '/virtual/calcform_nabor');
            }
        });
         
        $('#new_order form').submit(function(){
            //console.log('test8');
            if(typeof yaCounter28702351 !== 'undefined') yaCounter28702351.reachGoal('calcform_good');
            if(typeof ga !== 'undefined') ga('send', 'pageview', '/virtual/calcform_good');
        });
        
        $(".slide .call").click(function(){
            //console.log('test8');
            if(typeof yaCounter28702351 !== 'undefined') yaCounter28702351.reachGoal('zvonok_click');
            if(typeof ga !== 'undefined') ga('send', 'pageview', '/virtual/zvonok_click');
        });
        
        $('#form-one input').focusout(function(){
            if($(this).val().length >= 3){
                //console.log('test9');
                if(typeof yaCounter28702351 !== 'undefined') yaCounter28702351.reachGoal('zvonok_nabor');
                if(typeof ga !== 'undefined') ga('send', 'pageview', '/virtual/zvonok_nabor');
            }
        }); 
        
        $('#form-one .submit').click(function(){
            //console.log('test10');
            if(typeof yaCounter28702351 !== 'undefined') yaCounter28702351.reachGoal('zvonok_good');
            if(typeof ga !== 'undefined') ga('send', 'pageview', '/virtual/zvonok_good');
        }); 
        
        $('#form-pay input').focusout(function(){
            if($(this).val().length >= 3){
                //console.log('test11');
                if(typeof yaCounter28702351 !== 'undefined') yaCounter28702351.reachGoal('oplata_nabor');
                if(typeof ga !== 'undefined') ga('send', 'pageview', '/virtual/oplata_nabor');
            }
        }); 

        $('#submit-pay').click(function(){
            //console.log('test12');
            if(typeof yaCounter28702351 !== 'undefined') yaCounter28702351.reachGoal('oplata_good');
            if(typeof ga !== 'undefined') ga('send', 'pageview', '/virtual/oplata_good');
        }); 
        
        $('#form-four input, #form-four textarea').focusout(function(){
            if($(this).val().length >= 3){
                //console.log('test13');
                if(typeof yaCounter28702351 !== 'undefined') yaCounter28702351.reachGoal('vopros_nabor');
                if(typeof ga !== 'undefined') ga('send', 'pageview', '/virtual/vopros_nabor');
            }
        });     
        
        $('#form-four .submit').click(function(){
            //console.log('test14');
            if(typeof yaCounter28702351 !== 'undefined') yaCounter28702351.reachGoal('vopros_good');
            if(typeof ga !== 'undefined') ga('send', 'pageview', '/virtual/vopros_good');
        }); 
        
        $('#form-three input').focusout(function(){
            if($(this).val().length >= 3){
                //console.log('test15');
                if(typeof yaCounter28702351 !== 'undefined') yaCounter28702351.reachGoal('otziv_nabor');
                if(typeof ga !== 'undefined') ga('send', 'pageview', '/virtual/otziv_nabor');
            }
        }); 

        $('#form-three .btn.btn-left').click(function(){
            //console.log('test16');
            if(typeof yaCounter28702351 !== 'undefined') yaCounter28702351.reachGoal('otziv_good');
            if(typeof ga !== 'undefined') ga('send', 'pageview', '/virtual/otziv_good');
        }); 
        /**/
        } /* end dev script */

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
        
        $(document).on('submit','#frmwrapper form',function(ev){
            var frm = $('#frmwrapper form');
            $('#submit').prop( "disabled", true );
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

        lazyload();

    });

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

    /* * /    
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

}, jQuery);