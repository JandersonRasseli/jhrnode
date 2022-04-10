const express = require('express');
const app = express();
const db = require("./db");

let valor = 0

app.use(express.static(__dirname + '/public'))

app.get('/alt', function (req, res) {
  valor = req.query.vl
  console.log(req.query)
  res.end(req.query.vl)
});

app.get('/ver', function (req, res) {
    res.send(" <html> "+
             "  <head> "+
             "    <meta charset= \'UTF-8\' http-equiv=\'refresh\' content=3 /> "+
             "    <title>Nível de Água</title> "+
             "  </head> "+
             "  <body> "+
             "    <div> "+
             "      <h1>Nível X db X</h1> "+
             "      <div>"+valor+"</div> "+
             "    </div> "+
             "  </body> "+
             "</html>")
});

app.get('/jand', function (req, res) {
  const db = require("./db");
  const clientes = await db.selectCustomers();
  res.end(clientes);
});

var porta = process.env.PORT || 3001
app.listen(porta)
