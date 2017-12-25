var	http	=	require('http'),
				PORT	=	1234;
				
var	server	=	http.createServer(function(req,	res)

{
				var	body	=	"<H1>Haruskah	belajar	Node.js?<//H1><p><h3>...Yo	Mesto!</h3></p></br><p>Nama saya irwan</p>"
				res.writeHead(200,	{
								'Content-Length':body.length,
								'Content-Type':'text/html',
								'Pesan-Header':'Basic Node.js'
				});
				res.write(body);
				res.end();
});
server.listen(PORT);
console.log("Port	"+PORT+"	:	Node.js	Server...");