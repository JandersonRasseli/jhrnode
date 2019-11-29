const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Jandinho no NODE!!');
});

var porta = process.env.PORT || 8000;
app.listen(porta);
