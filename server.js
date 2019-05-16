//Dependencies
var express = require("express");
var path = require("path");

//Express App
var app = express();
var PORT = process.env.PORT || 3000;

//Express App for Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);

})

