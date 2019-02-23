var  mn = $(".container");
    mns = "container-scrolled";
    hdr = $('header').height();
	
$(window).scroll(checkContainerScrolled);
$(window).ready(checkContainerScrolled);

function checkContainerScrolled() {
  if( $(this).scrollTop() > hdr ) {
    mn.addClass(mns);
  } else {
    mn.removeClass(mns);
  }
}

function myMenu() {
    var x = document.getElementById("cfix");
    if (x.className === "clearfix") {
        x.className += " responsive";
    } else {
        x.className = "clearfix";
    }
}

