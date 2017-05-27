//var express = require('express');
//
//var app = express();
//
//const PORT = process.env.PORT || 3000;
//
//app.use(function(req, res, next){
//  
//  if (req.headers['x-forwarded-proto'] === 'http'){
//    next();
//  }else{
//    res.redirect('https://' + req.hostname + req.url);
//  }
//  
//});
//
//
//app.use(express.static('public'));
//
//app.listen(PORT, function () {
//   console.log('Express server is up and running on port ' + PORT);
//});

var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

//
//
//app.use(function(req, res, next){
//
//  if(req.secure){
//    // redirect
//    
//    res.redirect('http://' + req.hostname + req.url);
//  } else {
//    return next();
//  }
//  // handle port numbers if you need non defaults
//  
//});

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('public/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
