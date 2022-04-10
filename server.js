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
             "      <h1>Nível</h1> "+
             "      <div>"+valor+"</div> "+
             "    </div> "+
             "  </body> "+
             "</html>")
});

app.get('/db', function (req, res) {
  console.log('ini');
  (async () => {
    const db = require("./db");
    console.log('Começou!');

    console.log('SELECT * FROM CLIENTES');
    const clientes = await db.selectCustomers();
    console.log(clientes);
    res.end('testessss');
  })()};

var porta = process.env.PORT || 3001
app.listen(porta)
