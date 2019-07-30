//Hide Menu on Scroll

$(function() {

    $( document ).ready(function() {
        var prevScrollpos = window.pageYOffset;
        $(window).scroll( function() {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("header").setAttribute(
                    "style", "top: 0; box-shadow: 0 3px 40px rgba(0,0,0,.3);");
            } else {
                document.getElementById("header").setAttribute(
                    "style", "top: -150px; box-shadow: 0 3px 30px transparent;");
            }
            prevScrollpos = currentScrollPos;
        });

        //удаление атрибута 'style'
        $(window).scroll(function() {
            if ($(this).scrollTop() > 50) {
                $('.header').attr('style')
            } else {
                $('.header').removeAttr('style');
            }
        });
        //

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

        if(document.getElementById('fixed-table-container_price')) {
           var fixedTable = fixTable(document.getElementById('fixed-table-container_price'));
        }
        
        $('.toggle-more').click(function(e) {
            e.preventDefault();
          
            var $this = $(this);
          
            if ($this.next().hasClass('show')) {
                // hide current
                $this.addClass('collapsed');
                $this.next().removeClass('show');
                $this.next().slideUp(350);
                $this.parent().parent().parent().children('.table-box.car-section').removeClass('show');
                $this.parent().parent().parent().children('.table-box.car-section').slideUp(350);
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
                $this.next().toggleClass('show');
                $this.next().slideToggle(350);
                $this.parent().parent().parent().children('.table-box.car-section').toggleClass('show');
                $this.parent().parent().parent().children('.table-box.car-section').slideToggle(350);
            }
        });

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

}, jQuery);
