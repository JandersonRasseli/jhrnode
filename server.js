const express = require('express');
const app = express();

let valor = 0
let caixa01 = 0;

app.use(express.static(__dirname + '/public'))

app.get('/alt', function (req, res) {
  valor = req.query.vl
  console.log(req.query)
  res.end(req.query.vl)
});

app.get('/alt_caixa01', function (req, res) {
  caixa01 = req.query.vl
  console.log(req.query)
  res.end(req.query.vl)
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
             "      <div>"+valor+"</div> "+
             "    </div> "+
             "  </body> "+
             "</html>")
});

app.get('/teste', function (req, res) {
    let imagem = "'https://raw.githubusercontent.com/JandersonRasseli/jhrnode/master/Nivel_0.jpg'";
    if (valor == "L.L.L") {
      imagem = "'https://raw.githubusercontent.com/JandersonRasseli/jhrnode/master/Nivel_3.jpg'";
    }
    if (valor == "L.L.D") {
      imagem = "'https://raw.githubusercontent.com/JandersonRasseli/jhrnode/master/Nivel_2.jpg'";
    }
    if (valor == "L.D.D") {
      imagem = "'https://raw.githubusercontent.com/JandersonRasseli/jhrnode/master/Nivel_1.jpg'";
    }

    res.send(" <html> "+
             "  <head> "+
             "    <meta charset= \'UTF-8\' http-equiv=\'refresh\' content=5 /> "+
             "    <title>Nível de Água</title> "+
             "  </head> "+
             "  <body> "+
             "      <div>"+valor+"</div> "+
             "    <div> "+
             "      <img src="+imagem+" alt='Teste4' width='500' height='600'> "+
             "    </div> "+
             "  </body> "+
             "</html>")
});

app.get('/caixa01', function (req, res) {
    let imagem = "'https://raw.githubusercontent.com/JandersonRasseli/jhrnode/master/Nivel_0.jpg'";
    if (caixa01 == "L.L.L") {
      imagem = "'https://raw.githubusercontent.com/JandersonRasseli/jhrnode/master/Nivel_3.jpg'";
    }
    if (caixa01 == "L.L.D") {
      imagem = "'https://raw.githubusercontent.com/JandersonRasseli/jhrnode/master/Nivel_2.jpg'";
    }
    if (caixa01 == "L.D.D") {
      imagem = "'https://raw.githubusercontent.com/JandersonRasseli/jhrnode/master/Nivel_1.jpg'";
    }

    res.send(" <html> "+
             "  <head> "+
             "    <meta charset= \'UTF-8\' http-equiv=\'refresh\' content=5 /> "+
             "    <title>Nível de Água</title> "+
             "  </head> "+
             "  <body> "+
             "      <div>"+caixa01+"</div> "+
             "    <div> "+
             "      <img src="+imagem+" alt='Teste4' width='500' height='600'> "+
             "    </div> "+
             "  </body> "+
             "</html>")
});

var porta = process.env.PORT || 3001
app.listen(porta)
