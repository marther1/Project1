$.noConflict();
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');

  $('#form').on("submit", function(e) {
    var email = $('#email').val();
    var valid =  /.+@.+/;
    e.preventDefault();
    if (email === '') {
      console.log('email field is empty');
      $('#invalid').remove();
      $('#form-list').append('<li id="invalid">Please enter your email address to recieve your invite.</li>');
    }
    else if (!valid.test(email)) {
      console.log('invalid email');
      $('#invalid').remove();
      $('#form-list').append('<li id="invalid">Please enter a valid email address.</li>');
      return false;
    }
    else {
      $(this).remove();
      $('#description').append('<li id="submitted">We\'ll see how good you are in the Bog this Friday.</li>');
    }
  });
});
