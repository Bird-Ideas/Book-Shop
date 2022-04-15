const express = require("express");
const router = express.Router();

const { Book } = require("../models/");

router.post("/", async (req, res) => {
  const body = req.body; 
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
    const author = await Book.findAll();
    return res.json(author);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const author = await Book.findOne({
      where: { id },
    });
    return res.json(author);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

module.exports = router;
