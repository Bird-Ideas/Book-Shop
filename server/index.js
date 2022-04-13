const express = require('express');
const cors = require('cors'); 
const db = require('./db'); 
const app = express(); 
const port = 3000; 

app.use(cors()); 
app.use(express.json()); 

// app.post('/', async(req, res) {

// }); 

app.get('/', function(req, res) {
    res.send('Hello World!')
});
  
  app.listen(port, function() {
    console.log(`Example app listening on port ${port}!`)
});