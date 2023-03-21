javascript: (() => {

    //News Pags
    //Remove side adv section
    $(".theiaStickySidebar").parent().remove();

    //use all columns
    $(".col-md-8.col-sm-12.b-r").removeClass().addClass("col-md-12 col-sm-12 b-r");


    //Style to view articles Better
    // img.img-responsive.img-sec.pull-right-sm.lazy {
    //     height: 100px !important;
    // }

    var styleInfo = "img.img-responsive.img-sec.pull-right-sm.lazy {  height: 100px !important; }";
    $("<style>").prop("type", "text/css").html(styleInfo).appendTo("head");

})();

//Minify and use- Bookmarklet as below
//javascript: (()=>{$(".theiaStickySidebar").parent().remove(),$(".col-md-8.col-sm-12.b-r").removeClass().addClass("col-md-12 col-sm-12 b-r");$("<style>").prop("type","text/css").html("img.img-responsive.img-sec.pull-right-sm.lazy {  height: 100px !important; }").appendTo("head")})();