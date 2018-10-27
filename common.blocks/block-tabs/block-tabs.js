modules.require(['jquery'], function($) {
    $(".block-tabs__li").click(function( event ) {
        event.preventDefault();
        $(this).addClass("block-tabs__li_block_active");
        $(this).siblings().removeClass("block-tabs__li_block_active");
        var tab = $(this).attr("dataitem");
        $(".block-tabs__content").not(tab).css("display", "none");
        $(tab).show();
    });
});