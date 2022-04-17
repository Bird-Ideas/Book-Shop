const express = require("express");
const router = express.Router();

const { Book } = require("../models/");

router.post("/", async (req, res) => {
  const body = req.body;
  try {
    const book = await Book.create(body);
    return res.json(book);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const book = await Book.findAll();
    return res.json(book);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const book = await Book.findOne({
      where: { id },
    });
    return res.json(book);
  } catch (err) {
    return res.status(500).json(err);
  }
});


router.post("/filtered", async (req, res) => {
  const publisher = req.body.publisher; 
  const language = req.body.language;
  const cover = req.body.cover;
  let where = {}; 
  if(publisher.length > 0) {
    where.publisher = publisher; 
  }
  if(language.length > 0) {
    where.language = language; 
  }
  if(cover.length > 0) {
    where.cover = cover; 
  }
  console.log(where); 
  try {
    const book = await Book.findAll({
      where: where
    });
    return res.json(book);
  } catch (err) {
    return res.status(500).json(err);
  }
});


module.exports = router;