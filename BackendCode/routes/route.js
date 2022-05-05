var express = require("express");

var bookList = [
    { id: 1, name: "HTML 5" },
    { id: 2, name: "CSS 3" },
    { id: 3, name: "Java Script" },
    { id: 4, name: "Ajax Programming" },
    { id: 5, name: "jQuery" },
    { id: 6, name: "Mastering Node.js" },
    { id: 7, name: "Angular JS 1.x" },
    { id: 8, name: "ng-book 2" },
    { id: 9, name: "Backbone JS" },
    { id: 10, name: "Yeoman" },
];

var router = express.Router();
var path = require("path");

router.get("/", function (req, res, next) {
    console.log("hi");
});

//API : http://localhost:3020/addBook
router.post("/addBook", function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type, Accept, X-Requested-With, remember-me"
    );
    var body = req.body;

    bookList.push(body);
    res.json(body);
});

//API : http://localhost:3020/bookList/:id
router.delete("/bookList/:id", function (req, res) {
    var id = req.params.id;
    var index = bookList.findIndex((book) => book.id == id);
    bookList.splice(index, 1);
    res.json(bookList);
});

router.get("/bookList/:id", function (req, res) {
    var id = req.params.id;
    var book = bookList.find((book) => book.id == id);
    // bookList.splice(index, 1);
    console.log("book=", book);
    res.json(book);
});

//API : http://localhost:3020/bookList
router.get("/bookList", function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json(bookList);
});

//API : http://localhost:3020/update
router.put("/update", function (req, res) {
    var obj = bookList.findIndex((book) => book.id == req.body.id);
    bookList[obj] = req.body;
    res.json(bookList);
});

module.exports = router;
