// Set up MySQL connection
var mysql = require("mysql");

var connection = mysql.createConnection({
  port: process.env.PORT || 3306,
  host: process.env.HOST || 'localhost',
  user: process.env.USER || 'root',
  password: process.env.PASSWORD || '',
  database: process.env.DATABASE || 'burgers_db'
});

// Make connection with database
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for the ORM to use
module.exports = connection;
