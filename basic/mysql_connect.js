// Get the mysql service
var mysql = require('mysql');

// Add the credentials to access your database
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : '<user in yourdatabase>',
    password : '<password in yourdatabase>',
    database : '<database that you use>'
});

// connect to mysql
connection.connect(function(err) {
    // in case of error
    if(err){
        console.log(err.code);
        console.log(err.fatal);
    }
});


connection.query('SELECT *FROM <table in yourdatabase>', function(err, rows, fields)
{
    if(err) throw err;
    console.log(rows);
});








connection.end();
// Perform a query
/*$query = 'SELECT * from MyTable LIMIT 10';

connection.query($query, function(err, rows, fields) {
    if(err){
        console.log("An error ocurred performing the query.");
        return;
    }

    console.log("Query succesfully executed: ", rows);
});

// Close the connection
connection.end(function(){
    // The connection has been closed
});*/