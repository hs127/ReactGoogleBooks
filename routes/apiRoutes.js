const axios = require("axios");
const router = require("express").Router();
const db = require("../models");
// const booksController = require("../../controllers/bookController");

router.get("/books", (req, res) => {
    axios
        .get("https://www.googleapis.com/books/v1/volumes?", { params: req.query })
        .then(({ data: { results } }) => res.json(results))
        .catch(err => res.status(422).json(err));
});


router.post("/save", function (req, res) {
    console.log(req.body);
    db.Book.create(req.body)
        .then(function (dbNote) {
            console.log(dbNote._id)
            return db.Article.findOneAndUpdate({ _id: req.params.articleId }, { $push: { note: dbNote._id } }, { new: true });
        }).then(function (dbArticle) {
            res.json(dbArticle);
        }).catch(function (err) {
            res.json(err);
        });
});


// })


module.exports = router;
