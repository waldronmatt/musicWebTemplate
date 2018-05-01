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

function myMenu() {
    var x = document.getElementById("cfix");
    if (x.className === "clearfix") {
        x.className += " responsive";
    } else {
        x.className = "clearfix";
    }
}

$(function() {
  
// Dropdown toggle
$('.drop').click(function(){
  $(this).next('.down').toggle();
});


});