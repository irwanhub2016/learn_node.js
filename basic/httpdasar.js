var	http	=	require('http'),
				PORT	=	1234;
				
var	server	=	http.createServer(function(req,	res)

{
				var	url_demo	=	"http://localhost:"+PORT;
				var	body	=	'<H1>Haruskah	belajar	Node.js?<//H1><p><h3>...Yo	Mesto!</h3>'
				+'</p></br><p>Nama saya irwan. Kamu bisa mengunjungi demo js saya di : </p>'
				+'</p></br><ul> 1.<a href = '+url_demo+'>Http Dasar</a></ul>'
				+'<ul>2.<a href = >Static Server</a></ul>'
				+'<ul>3.<a href = '+url_demo+'>URL Form</a></ul>';
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