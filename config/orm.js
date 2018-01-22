const connection = require("../config/connection.js");

//handle ? for SQL Query
function questionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?")
    }
    return arr.toString();
};
//format to string
function makeSql(ob) {
    let arr = [];
    for (var key in ob) {
        let val = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof val === "string" && val.indexOf(" ") >= 0) {
                val = "'" + val + "'";
            }
            arr.push(key + "=" + val);
        }
    }
    return arr.toString();
};

// Create ORM that assembles SQL query string.
const orm = {
    selectAll: function (tableInput, callback) {
        const sqlQuery = "SELECT * FROM " + tableInput + ";";
        connection.query(sqlQuery, function (error, result) {
            if (error) throw error;
            callback(result);
        });
    },
    insertOne: function (table, column, values, callback) {
        const sqlQuery = "INSERT INTO " + table + " (" + column.toString() + ") VALUES (" + questionMarks(values.length) + ")";
        console.log(sqlQuery);
        connection.query(sqlQuery, values, function (error, result) {
            if (error) throw error;
            callback(result);
        })
    }
    
};


//export orm
module.exports = orm;