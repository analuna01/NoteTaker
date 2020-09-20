// Dependencies
var fs = require("fs");
var path = require("path");

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
        fs.writeFileSync(path.join("./db/db.json"), 'utf8');
        res.json(true);

        console.log("Note Created!")
    });


    // DELETE

    // retrives notes by id
    app.get("/api/notes/:id", function(req,res) {

        res.json(notesData[req.params.id]);
    });

    // Deletes a note
    app.delete("/api/notes/:id", function (req, res) {

        notesData.splice(req.params.id, 1);
        updateData()
        res.json(true);
    });

    function updateData() {

        fs.writeFileSync(path.join("./db/db.json"), 'utf8')
        return true;
    };
}





