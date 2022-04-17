const express = require("express");
const router = express.Router();

const { Book, sequelize } = require("../models/");

router.get("/publisher", async (req, res) => {
  try {
    const publishers = await Book.findAll({
      attributes: [
        [sequelize.fn("DISTINCT", sequelize.col("publisher")), "name"],
      ],
    });
    return res.json(publishers);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.get("/cover", async (req, res) => {
  try {
    const cover = await Book.findAll({
      attributes: [
        [sequelize.fn("DISTINCT", sequelize.col("cover")), "name"],
      ],
    });
    return res.json(cover);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.get("/language", async (req, res) => {
  try {
    const languages = await Book.findAll({
      attributes: [
        [sequelize.fn("DISTINCT", sequelize.col("language")), "name"],
      ],
    });
    return res.json(languages);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
