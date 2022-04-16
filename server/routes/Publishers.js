const express = require("express");
const router = express.Router();

const { Publisher } = require("../models/");

router.post("/", async (req, res) => {
  const name = req.body.name;
  try {
    const publisher = await Publisher.create({ name });
    return res.json(publisher);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const publisher = await Publisher.findAll();
    return res.json(publisher);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const publisher = await Publisher.findOne({
      where: { id },
    });
    return res.json(publisher);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

module.exports = router;
