jQuery.noConflict();
jQuery(document).ready(function() {
	jQuery('.navbar .parent').addClass('dropdown');
	jQuery('.navbar a.level-top').addClass('dropdown-toggle');
	jQuery('.navbar li.parent ul').addClass('dropdown-menu');
	jQuery('.navbar li.level1 ul').wrap('<li class="dropdown-submenu" />');
	jQuery('.navbar ul.nav li.level0.dropdown').hover(function() {
		jQuery(this).find('.level0.dropdown-menu').stop(true, true).fadeIn();
	}, function() {
		jQuery(this).find('.level0.dropdown-menu').stop(true, true).fadeOut();
	});



	jQuery('.carousel[data-type="multi"] .item').each(function(){
		var next = $(this).next();
		if (!next.length) {
			next = $(this).siblings(':first');
		}
		next.children(':first-child').clone().appendTo($(this));

		for (var i=0;i<2;i++) {
			next=next.next();
			if (!next.length) {
				next = $(this).siblings(':first');
			}

			next.children(':first-child').clone().appendTo($(this));
		}
	});

});
jQuery(document).ready(function(){
	jQuery("dl#narrow-by-list> dd").show();
	jQuery("dl#narrow-by-list> dt").click(function(){
		jQuery(this).next("dd").slideToggle("slow");
		return false;
	});
});

/**
 jQuery("document").ready(function($){
   var nav = $('.nav-container');
   $(window).scroll(function () {
      if ($(this).scrollTop() > 136) {
         nav.addClass("f-nav");
         nav.addClass(".logo");
      }
      else {
         nav.removeClass("f-nav");
         nav.removeClass(".logo");
      }
   });
});**/
$(document).on("scroll",function(){
	var nav = $('.nav-container');
	if($(document).scrollTop()>136){
		$('.topmenu').addClass("hidden");
		nav.addClass("f-nav");
	}
	else
	{
		$('.topmenu').removeClass("hidden");
		nav.removeClass("f-nav");
	}



});