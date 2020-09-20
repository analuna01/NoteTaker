// Dependencies
var fs = require("fs");
var path = require("path");
var util = require("util")
var writeFileAsync = util.promisify(fs.writeFile);

var notesData = require("../public/assets/data/notesData");

// ROUTER

module.exports = function (app) {

    // GET

    app.get("/api/notes", function (req, res) {
        res.json(notesData);
    });

    // POST

    app.post("/api/notes", function (req, res) {
        
        notesData.push(req.body);
        fs.writeFileSync(path.join("../db/db.json"), 'utf8');
        res.json(true);
    });

    // DELETE

    // app.delete("/api/notes/:id", function (req, res) {

    //   });

};


