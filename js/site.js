$.noConflict();
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');

  $('#form').on("submit", function(e) {
    var email = {
      val: $('#email').val(),
      pattern: /^[^\s@]+@[^\s@]+$/
    };
    var camp = {
      val: $('#camp').val(),
      pattern: /^A?\d{8}/
    };
    e.preventDefault();
    if (email.val === '') {
      console.log('email field is empty');
      $('#invalid').remove();
      $('#emailid').append('<li id="invalid">Please enter your email address to recieve your invite.</li>');
    }
    else if (!(email.pattern).test(email.val)) {
      console.log('invalid email');
      $('#invalid').remove();
      $('#emailid').append('<li id="invalid">Please enter a valid email address.</li>');
    }
    else if (camp.val === ''){
      console.log('campus id field is empty');
      $('#invalid').remove();
      $('#campid').append('<li id="invalid">Please enter your Campus Id so we can verify that you are a part of IIT.</li>');
    }
    else if (!(camp.pattern).test(camp.val)) {
      console.log('invalid campus id');
      $('#invalid').remove();
      $('#campid').append('<li id="invalid">Invalid Campus Id.</li>');
    }
    else {
      $(this).remove();
      $('#description').append('<h2>Alright Gamer!</h2>');
      $('#description').append('<li>Your invite has been sent at: ' + email.val + '</li>');
    }
  });
});
