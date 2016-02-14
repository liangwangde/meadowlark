var express = require('express');                             //以module.export = 的形式引出
var handlebars = require('express3-handlebars').create({defaultLayout:'main'});  //因为用export.暴露出一个对象，调用其create方法

var app = express(); 
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');


app.set('port', process.env.PORT || 3000);

//路由

app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res){                 //get指http中get与post方法
  res.render('home');
});

app.get('/about', function(req, res){
  res.render('about');
});

//404页面

app.use(function(req, res){
  res.status(404);
  res.render('404');
});

//500

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500);
  res.send('500');
});

app.listen(app.get('port'), function(){
  console.log('Express start on http://localhost:' + 
               app.get('port') + ';press enter to terminate');
});
