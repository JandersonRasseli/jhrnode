const express = require('express');
const app = express();

let valor = 0

app.get('/esp', function (req, res) {
  valor = req.query.vl
  console.log(req.query)
  res.end(req.query.vl)
});

app.post('/esp:vl', function (req, res) {
  valor = req.params.vl
  console.log(req.params.vl)
  //console.log(req.body.vl)
  res.end("Resposta")  
});

app.get('/', function (req, res) {
  res.send(" <html> "+
           "  <head> "+
           "    <meta charset= \'UTF-8\' http-equiv=\'refresh\' content=2 /> "+
           "    <title>Luminosidade Remota</title> "+
           "  </head> "+
           "  <body> "+
           "    <div> "+
           "      <h1>Luminosidade</h1> "+
           "      <div>"+valor+"</div> "+
           "    </div> "+
           "  </body> "+
           "</html>")
});

var porta = process.env.PORT || 3001
app.listen(porta)
