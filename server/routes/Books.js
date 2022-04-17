const express = require("express");
const router = express.Router();

const { Book, Author, Publisher } = require("../models/");

router.post("/", async (req, res) => {
  const body = req.body;
  console.log(body); 
  try {
    const book = await Book.create(body);
    return res.json(book);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const book = await Book.findAll({
      include: [{model: Author, attributes: ['name']}, 
      {model: Publisher, attributes: ['name']}]
    });
    return res.json(book);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const book = await Book.findOne({
      where: { id },
      include: [{model: Author, attributes: ['name']}, 
      {model: Publisher, attributes: ['name']}]
    });
    return res.json(book);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

module.exports = router;
