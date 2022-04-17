const express = require("express");
const cors = require("cors"); 
const app = express();
const port = 3001;

const { sequelize } = require("./models");

app.use(express.json());
app.use(cors({origin: "*"})); 

const books = require("./routes/Books"); 
// const authors = require("./routes/Authors");
// const publishers = require("./routes/Publishers");  
const user = require("./routes/User"); 
app.use("/books", books); 
// app.use("/authors", authors); 
// app.use("/publishers", publishers); 
app.use("/", user); 


app.listen(port, async function () {
  console.log(`Example app listening on port ${port}!`);
  await sequelize.sync({ alter: true, force: false });
});
