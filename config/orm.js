var connection = require("./connection"); 

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

var orm = {
  selectAll: function(tableName, cb) {
    var queryString = "SELECT * FROM " + tableName + ";";

    console.log("Query: " + queryString);
    connection.query(queryString, function(err, results) {
      if (err) throw err;
      cb(results);
    });
  },
  insertOne: function(tableName, colNames, newValues, cb) {
    var queryString =
      "INSERT INTO " +
      tableName +
      " (" +
      colNames.toString() +
      ") VALUES(" +
      printQuestionMarks(newValues.length) +
      ");";

    console.log("Query: " + queryString);
    connection.query(queryString, newValues, function(err, results) {
      if (err) throw err;
      cb(results);
    });
  },
  updateOne: function(tableName, colVals, condition, cb) {
    var queryString =
      "UPDATE " +
      tableName +
      " SET " +
      objToSql(colVals) +
      " WHERE " +
      condition +
      ";";

    console.log("Query: " + queryString);
    connection.query(queryString, function(err, results) {
      if (err) throw err;
      cb(results);
    });
  }
};

module.exports = orm;
