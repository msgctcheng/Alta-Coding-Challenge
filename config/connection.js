
//make connection to SQL DB using NPM package

var mysql = require("mysql");
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "locations_db",
        port: 3306
    });
};
connection.connect(function (err) {
    if (err) {
        console.log("Connection Error: " + err.stack);
        return;
    }
    console.log("Connected as id: " + connection.threadId);
});

module.exports = connection;