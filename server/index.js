const express = require("express");
const app = express();
const port = 3001;

const { sequelize, Author } = require("./models");

app.use(express.json());

app.post("/authors", async (req, res) => {
  console.log(req.body); 
  const name = req.body.name;
  console.log(name); 
  try {
    const author = await Author.create({ name });
    return res.json(author);
  } catch (err) {
    console.log(err);
  }
});

// app.get('/', function(req, res) {
//     res.send('Hello World!')
// });
app.listen(port, async function () {
  console.log(`Example app listening on port ${port}!`);
  await sequelize.sync({force: true});  
});
