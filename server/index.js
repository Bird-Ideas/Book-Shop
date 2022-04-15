const express = require("express");
const cors = require("cors"); 
const app = express();
const port = 3001;

const { sequelize, Author } = require("./models");

app.use(express.json());
app.use(cors); 

const booksRouter = require("./routes/Books"); 
app.use("/books", booksRouter); 

app.post("/authors", async (req, res) => {
  const name = req.body.name;
  try {
    const author = await Author.create({ name });
    return res.json(author);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

app.get("/authors", async (req, res) => {
  try {
    const author = await Author.findAll();
    return res.json(author);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

app.get("/authors/:id", async (req, res) => {
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

app.listen(port, async function () {
  console.log(`Example app listening on port ${port}!`);
  await sequelize.sync({ alter: true, force: true });
});
