// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "pwcspfbyl73eccbn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "kimwelaaom68lk7u",
  password: "kbw5p0cyqqfwnzw7",
  database: "ew8ku8gudvlkwicc"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
