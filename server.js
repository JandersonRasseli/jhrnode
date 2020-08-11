const express = require('express');
const app = express();

let valor = 0

app.use(express.static('./JandersonRasseli/jhrnode/blob/master'));

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
           "      <div><img src='/Nivel_3.jpg' alt='Nível Água 6' width='400' height='500' /> </div> "+
           "    </div> "+
           "  </body> "+
           "</html>")
});

var porta = process.env.PORT || 3001
app.listen(porta)
