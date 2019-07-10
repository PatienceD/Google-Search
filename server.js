const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;


//defining middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
}

//Routes
app.use(routes);

//connect to mongodb
mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/googlebooks");

//Start the server
app.listen(PORT, function(){
    console.log("listening on http://localhost:" + PORT);
});