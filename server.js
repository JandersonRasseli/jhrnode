const express = require('express');
const app = express();

let valor = 0

app.use(express.static(__dirname + '/public'))

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
  if (valor == "LLL"){
    res.send(" <html> "+
             "  <head> "+
             "    <meta charset= \'UTF-8\' http-equiv=\'refresh\' content=10 /> "+
             "    <title>Nível de Água</title> "+
             "  </head> "+
             "  <body> "+
             "    <div> "+
             "      <h1>Nível</h1> "+
             "      <div>Colocar imagem 1 aqui </div> "+
             "    </div> "+
             "  </body> "+
             "</html>")
  }
  if (valor == "LLD"){
    res.send(" <html> "+
             "  <head> "+
             "    <meta charset= \'UTF-8\' http-equiv=\'refresh\' content=10 /> "+
             "    <title>Nível de Água</title> "+
             "  </head> "+
             "  <body> "+
             "    <div> "+
             "      <h1>Nível</h1> "+
             "      <div>Colocar imagem 2 aqui </div> "+
             "    </div> "+
             "  </body> "+
             "</html>")
  }
  if (valor == "LDD"){
    res.send(" <html> "+
             "  <head> "+
             "    <meta charset= \'UTF-8\' http-equiv=\'refresh\' content=10 /> "+
             "    <title>Nível de Água</title> "+
             "  </head> "+
             "  <body> "+
             "    <div> "+
             "      <h1>Nível</h1> "+
             "      <div>Colocar imagem 3 aqui </div> "+
             "    </div> "+
             "  </body> "+
             "</html>")
  }  
  if (valor == "DDD"){
    res.send(" <html> "+
             "  <head> "+
             "    <meta charset= \'UTF-8\' http-equiv=\'refresh\' content=10 /> "+
             "    <title>Nível de Água</title> "+
             "  </head> "+
             "  <body> "+
             "    <div> "+
             "      <h1>Nível</h1> "+
             "      <div>Colocar imagem 4 aqui </div> "+
             "    </div> "+
             "  </body> "+
             "</html>")
  }
});

var porta = process.env.PORT || 3001
app.listen(porta)
