const express = require('express');
const path = require('path');
var cors = require('cors');
const zoo = require('./data/zoo');

const app = express();

const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

// cors
app.use(cors({ origin: true, credentials: true }));


app.use('/api/animals', require('./routes/animals'))

app.listen(port, ()=> {
  console.log(`Server started on port ${port}`);
});