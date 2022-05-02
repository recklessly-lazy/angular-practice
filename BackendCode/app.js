var express = require("express");
var router = require("./routes/route");

var cors = require("cors");
var app = express();

//for post
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
    //Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Methods",
        "GET,HEAD,OPTIONS,POST,PUT,DELETE"
    );
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization"
    );
    next();
});
app.use(cors());
app.options("*", cors());
//

app.use("/", router);

app.listen(3020, function () {
    console.log("Server is up and running...");
});
// module.exports = app;
