const express = require("express");
const router = express.Router();

const { Author } = require("../models/");

router.post("/", async (req, res) => {
  const name = req.body.name;
  try {
    const author = await Author.create({ name });
    return res.json(author);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const author = await Author.findAll();
    return res.json(author);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const author = await Author.findOne({
      where: { id },
    });
    return res.json(author);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

module.exports = router;
