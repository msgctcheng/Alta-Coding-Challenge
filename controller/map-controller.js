const express = require("express");
const router = express.Router();
const location = require("../models/locations.js");

//set default route to render view
router.get("/", function (req, res) {
    
    res.render("index");
});
//create API route for saving single locations
router.post("/api/locations", function (req, res) {
    location.insertOne(["street", "home"], [req.body.street, false], function (result) {
        res.json({
            id: result.insertId
        });
    });
});
//Api route for retreiving Saved Destinations   
router.get("/", function (req, res) {
    location.selectAll(function (data) {
        var object = {
            spots: data
        };
        console.log(object);
    });
});


module.exports = router;