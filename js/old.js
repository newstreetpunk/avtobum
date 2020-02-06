/* Если это дев страница на сайте, то... скрипты со старой версии сайта */
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