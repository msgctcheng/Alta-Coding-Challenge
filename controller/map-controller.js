const express = require("express");
const router = express.Router();
const burger = require("../models/locations.js");

router.get("/", function (req, res) {
    
    res.render("index");
});

router.post("/api/burgers", function (req, res) {
    burger.insertOne(["burger_name", "devoured"], [req.body.name, false], function (result) {
        res.json({
            id: result.insertId
        });
    });
});


module.exports = router;