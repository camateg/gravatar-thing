var md5 = require('MD5');
var express = require('express');
var app = express();

app.engine('.haml', require('jade').renderFile);
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname+'/public'));

var port = process.env.PORT || 5000;
app.listen(port); //, 'localhost');

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/:email', function(req, res) {
  var img_url = get_img_url(req.params.email); 
  var tr_email = req.params.email.trim();
 
  res.render('image', { email: tr_email, img_url: img_url });
});

app.get('/:email/json', function(req, res) {
  var img_url = get_img_url(req.params.email);
  var tr_email = req.params.email.trim();

  res.send({email: tr_email, img_url: img_url});
});

function get_img_url(email) {
  var md5_email = md5(email.trim());
  var img_url = 'http://www.gravatar.com/avatar/' + md5_email + '.jpg?s=320';
  return img_url;
}
