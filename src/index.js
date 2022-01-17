const express = require('express');
const app = express();

//Routes
app.use(require('./routes/router'));

//Listen
const port = 3000
app.listen(port);
console.log(`Server on port ${port}`);