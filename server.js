const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

app.get('/', function (req, res) {
  res.send('Janderson no NODE!!');
});

var porta = process.env.PORT || 3001;
app.listen(porta);
