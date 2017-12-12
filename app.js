var express = require('express');
var app = express();
var hbs = require('express-handlebars');

var port = process.env.PORT || 3000;	

app.use(express.static(__dirname + '/pub'));
app.engine('hbs', hbs({defaultLayout: 'main',extname:'.hbs'}));
app.set('view engine', 'hbs');	

app.get('/',function(req,res){
	res.type('html');
	res.render('home');
})

app.get('/about',function(req,res){	
	res.render('about')
})

app.use(function(req,res,next){		
		res.status(404);		
		res.render('404')	
})

app.listen(port,function(err){
	if(err){
		console.log(err)
	}else {
		console.log('server running at port' + port )
	}
})