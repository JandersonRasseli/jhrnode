const express = require('express');
const app = express();

let valor = 0

app.use(express.static('public'));

app.get('/alt', function (req, res) {
  valor = req.query.vl
  console.log(req.query)
  res.end(req.query.vl)
});

app.post('/atual', function (req, res) {
  //valor = req.params.vl
  valor = 1302
  //console.log(req.params.vl)
  //console.log(req.body.vl)
  res.end("Resposta")  
});

app.get('/ver', function (req, res) {
  res.send(" <html> "+
           "  <head> "+
           "    <meta charset= \'UTF-8\' http-equiv=\'refresh\' content=10 /> "+
           "    <title>Nível de Água</title> "+
           "  </head> "+
           "  <body> "+
           "    <div> "+
           "      <h1>Nível</h1> "+
           "      <div><img src='/Nivel_3.jpg' /> </div> "+
           "    </div> "+
           "  </body> "+
           "</html>")
});

var porta = process.env.PORT || 3001
app.listen(porta)
