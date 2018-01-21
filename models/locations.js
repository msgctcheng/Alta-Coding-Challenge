const orm = require("../config/orm.js");

const location = {
    selectAll: function(callback) {
        orm.selectAll("spots", function(res){
            callback(res);
        });
    },
    insertOne: function(columns, values, callback) {
        orm.insertOne("spots", columns, values, function (res){
            callback(res);
        });
    },
    updateOne: function (obj, condition, callback) {
        orm.updateOne("spots", obj, condition, function(res) {
            callback(res);
        });
    }
};
module.exports = location;