var  mn = $(".container");
    mns = "container-scrolled";
    hdr = $('header').height();

function checkContainerScrolled() {
  if( $(this).scrollTop() > hdr ) {
    mn.addClass(mns);
  } else {
    mn.removeClass(mns);
  }
}

$(window).scroll(checkContainerScrolled);

$(window).ready(checkContainerScrolled);
