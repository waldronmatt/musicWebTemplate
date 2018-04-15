var $form = $('form#email-form'),
    url = 'https://script.google.com/macros/s/AKfycbz0p3AaSvvG2muFU1jLUQmaRBK3aSRxcF-_gcGrnIweDdfZc8KS/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})