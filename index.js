const express = require("express");
const app = express(); 

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(4201, () => {
    console.log(`Server is listening on port 4201`); 
})