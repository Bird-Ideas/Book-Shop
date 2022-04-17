const express = require("express");
const cors = require("cors"); 
const app = express();
const port = 3001;

const { sequelize } = require("./models");

app.use(express.json());
app.use(cors({origin: "*"})); 

const books = require("./routes/Books"); 
const user = require("./routes/User"); 
const options = require("./routes/Options"); 
app.use("/", user); 
app.use("/books", books); 
app.use("/options", options); 

app.listen(port, async function () {
  console.log(`Example app listening on port ${port}!`);
  await sequelize.sync({ alter: true, force: false });
});
