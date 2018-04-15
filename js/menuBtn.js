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


