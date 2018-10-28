modules.require(['jquery'], function($) {
    $(window).scroll(function(){
        if($(this).scrollTop()>140){
            $('#navigation').addClass('fixed_visabile_show');
        }
        else if ($(this).scrollTop()<140){
            $('#navigation').removeClass('fixed_visabile_show');
        }
    });
});