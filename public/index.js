$(document).ready(function() {
  $('#show').click(function(e) {
    var email = $('#email').val();
    $.getJSON('/'+email+'/json', function(ret) {
      $('#image').attr('src', ret.img_url);
      $('#email-h2').text(ret.email);
      $('#perm-link').attr('href','/'+email);
      console.log(ret);
    });
  });
});
