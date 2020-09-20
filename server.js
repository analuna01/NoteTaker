// Dependencies
var express = require("express");
var path = require("path");
var fs = require("fs");

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(express.static('db'));

// ROUTER
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Starts the server to begin listening
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});






// app.get("/notes", function (req, res) {
//     notes = JSON.parse(fs.readFileSync(path.join(__dirname, "/db/db.json", "utf8")));
//     res.sendFile(path.join(__dirname, "public/notes.html"));
// });

// app.get("/api/notes", function (req, res) {
//     data = JSON.parse(fs.readFileSync(path.join(__dirname, "/db/db.json", "utf8")));
//     res.sendFile(path.join(__dirname, "public/notes.html"));
// });

// app.get("/api/notes/:id", function (req, res) {

// });
