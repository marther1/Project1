$.noConflict();
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');

  $('#form').on("submit", function(e) {
    var email = $('#email').val();
    e.preventDefault();
    if (email == '') {
      console.log('email field is empty');
      $('#invalid').remove();
      $('#form-list').append('<li id="invalid">Please enter your email address to recieve your invite.</li>');
    }
  });
});
