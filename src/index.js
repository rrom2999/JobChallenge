const express = require('express');
const app = express();

//For json and forms management
app.use(express.json());
app.use (express.urlencoded({extended: false}));

//Routes
app.use(require('./routes/router'));

//Listen
const port = 3000
app.listen(port);
console.log(`Server on port ${port}`);