$(function() {
  $('a[href*=#]:not([href=#])').click(function(event) {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 750);
		$("#icon a").click();
		$("#icon a").click();
		}
	  event.preventDefault();
    }
  });
});