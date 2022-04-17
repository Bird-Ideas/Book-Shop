// const express = require("express");
// const router = express.Router();

// const { Publisher, Book, sequelize } = require("../models/");

// router.post("/", async (req, res) => {
//   const name = req.body.name;
//   try {
//     const publisher = await Publisher.create({ name });
//     return res.json(publisher);
//   } catch (err) {
//     console.log(err);
//     return res.status(500).json(err);
//   }
// });

// router.get("/", async (req, res) => {
//   try {
//     const publisher = await Publisher.findAll();
//     const distinct = await Book.findAll({
//       attributes: [
//         [sequelize.fn('DISTINCT', sequelize.col("PublisherId")), 'publishers']
//       ]
//     }); 
//     console.log(distinct);

//     return res.json(distinct);
//   } catch (err) {
//     console.log(err);
//     return res.status(500).json(err);
//   }
// });

// router.get("/:id", async (req, res) => {
//   const id = req.params.id;
//   try {
//     const publisher = await Publisher.findOne({
//       where: { id },
//     });
//     return res.json(publisher);
//   } catch (err) {
//     console.log(err);
//     return res.status(500).json(err);
//   }
// });

// module.exports = router;
