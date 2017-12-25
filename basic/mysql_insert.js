var mysql = require('mysql');

var connection = mysql.createConnection(
{
	host		: 'localhost',
	user		: 'root',
	password	: '',
	database	: 'hitshuttle'	
});

connection.connect();

var user = { id_rute : '2017xpana2017',
rute_awal : 'parung',
rute_tujuan : 'depok',
waktu_operasi : '9.30'
};

connection.query('INSERT INTO rute SET ?', user, function(err, res)
{
	if(err) throw err;

	console.log(user);
});

connection.end();