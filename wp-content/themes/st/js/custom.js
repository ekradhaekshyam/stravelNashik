jQuery(document).ready(function ($) {
  // Centering the menu.
   var logoimg = $('.navbar-brand').html();
   var logourl = $('.navbar-brand').attr('href');
   var middle = Math.ceil($("ul.navbar-nav").children('li').length / 2);
  $(".logo-centered .navbar-nav >li:eq(" + (middle-1) + ")").after($('<li class="nav-logo"><a href="' + logourl + '">' + logoimg + '</a></li>'));
  $(".logo-centered .navbar-brand" ).addClass('logo-hide');
  $('.back-2-top a').click(function(event) {
    event.preventDefault();   
    $('html, body').animate({scrollTop: 0}, 500);
  });

    jQuery('#main-nav li').mouseenter( function(){
        jQuery(this).children('ul.sub-menu').fadeIn();
    });
    jQuery('#main-nav li').mouseleave( function(){
        jQuery(this).children('ul.sub-menu').fadeOut();
    });
});



// Testimonial/blog slider and carousel



jQuery(window).load(function() {

   if( jQuery('#lo-slider').length > 0){

  jQuery('#lo-slider').flexslider({

    animation: "slide",

    animationLoop: true,

    itemWidth: 260,

    itemMargin: 0,

    minItems: 1,

    maxItems: 4,

    directionNav: true,

    controlNav: false

  });

}

 if( jQuery('#testimonials-slider-dark').length > 0){

jQuery('#testimonials-slider-dark').flexslider({

    animation: "slide",

    animationLoop: true,

    itemMargin: 0,

    directionNav: true,

    controlNav: false

  });

}



 if( jQuery('.blog-post-img-slider').length > 0){

jQuery('.blog-post-img-slider').flexslider({

    animation: "slide",

    animationLoop: true,

    itemMargin: 0,

    directionNav: false,

    controlNav: true

  });

}

});



// Waypoint for loading effects 

jQuery(document).ready(function() {

	jQuery('.movin').waypoint(function(){

					jQuery(this).addClass('movedin');

				},{offset:'80%'});



 	jQuery(".gallery-pop-up").fancybox();



});