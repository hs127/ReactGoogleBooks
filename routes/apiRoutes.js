const axios = require("axios");
const router = require("express").Router();
const db = require("../models");
const booksController = require("../controllers/bookController");

// router.get("/books", (req, res) => {
//     axios
//         .get("https://www.googleapis.com/books/v1/volumes?", { params: req.query })
//         .then(({ data: { results } }) => res.json(results))
//         .catch(err => res.status(422).json(err));
// });

router.post("/books", function (req, res) {
    console.log(db.Book);
    db.Book.create(req.body).then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

router.get("/books", function (req, res) {
    console.log("get Call");
    db.Book.find({})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

router.delete("/books/:id", function (req, res) {
    console.log("dele route");
    console.log(req.params);
    db.Book
        .findOneAndDelete({ googleId: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));

});


module.exports = router;
