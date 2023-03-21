javascript: (() => {

    //Hides popup
    jQuery(".popup-ad-content-wrap").hide();

    //First Row adv
    jQuery("#home_top_right_level_0").parent().siblings(".col-md-8").removeClass("col-md-8").addClass("col-md-12");
    jQuery("#home_top_right_level_0").parent().remove();

    $(".home-lazy-load-container").find("div.col-md-3:last-child").remove();


    //Remove Right Side Empty Adv Divs
    jQuery.each(
        jQuery(".hocal-ad"), function (i, val) {

            if ($(this).html() != '') {
                //            jQuery(this).parent().siblings().removeClass().addClass("col-md-4 col-sm-6 col-xs-12");
                jQuery(this).parent(".col-md-3").remove();

            }
        });
    //Make Divs to use all space 4 columns instead of 3
    jQuery(".col-md-3.col-sm-6.col-xs-12").removeClass().addClass("col-md-4 col-sm-6 col-xs-12")


})();

//Minify and use- Bookmarklet as below
//javascript: (()=>{jQuery(".popup-ad-content-wrap").hide(),jQuery("#home_top_right_level_0").parent().siblings(".col-md-8").removeClass("col-md-8").addClass("col-md-12"),jQuery("#home_top_right_level_0").parent().remove(),$(".home-lazy-load-container").find("div.col-md-3:last-child").remove(),jQuery.each(jQuery(".hocal-ad"),function(e,o){""!=$(this).html()&&jQuery(this).parent(".col-md-3").remove()}),jQuery(".col-md-3.col-sm-6.col-xs-12").removeClass().addClass("col-md-4 col-sm-6 col-xs-12");})();