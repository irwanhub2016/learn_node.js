var http = require('http');
var data =[];

var qs = require('querystring');

var server = http.createServer(function(req, res)

{
	if ('/'== req.url) 
	{
		switch(req.method)
		{
			case 'GET':
			tampilkanForm(res);
			break;
			case 'POST':
			prosesData(req, res);
			break;
			default:
			badRequest(res);
		}
	}

	else if ('/hello'==req.url) 
	{
		helloCode(res);
	}
	else
	{
		notFound(res);
	}
});	

function tampilkanForm(res)
{

var html = '<html><head><title>Asik nih</title></head><body>'
+ '<h1>Bikin form lewat JS !</h1><p>Ini irwan</p></br>'
+	'<form	method="post"	action="/">'
+	'<p><input	type="text"	name="hobi"></p>'
+	'<p><input	type="submit"	value="Simpan"></p>'
+ '</body></html>'; //tanda + untuk meneruskan isi body dari yang sebelumnya



	res.setHeader('Content-Type', 'text/html');
	res.setHeader('Content-Length', Buffer.byteLength(html));
	res.end(html);

}

function prosesData(req, res)	
{
var	body=	'';
req.setEncoding('utf-8');
req.on('data',	function(chunk)
{body	+=	chunk;});

req.on('end',	function(){
	var	data	=	qs.parse(body);
 	res.setHeader('Content-Type',	'text/plain');
	res.end('Hobiku:	'+data.hobi);
	});
}			

function	badRequest(res){
			res.statusCode	=	400;
			res.setHeader('Content-Type',	'text/plain');
			res.end('400	-	Bad	Request');
}

function notFound(res)
{
	res.statusCode=404;
	res.setHeader('Content-Type', 'text/plain');
	res.end('404 - Tidak Ditemukan');
}

function helloCode(res)
{
	var hello = '<h1>Welcome !</h1>'	
	res.statusCode=200;
	res.setHeader('Content-Type', 'text/html');
	res.setHeader('Content-Length', Buffer.byteLength(hello));
	res.end(hello);
}


server.listen(3400);
console.log('ready ...');