const express = require('express');
const app = express();

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
             "      <h1>Nível #0</h1> "+
             "      <div>"+valor+"</div> "+
             "    </div> "+
             "  </body> "+
             "</html>")
});

var porta = process.env.PORT || 3001
app.listen(porta)
