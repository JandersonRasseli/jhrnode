const express = require('express');
const app = express();

let valor = 0

app.get('/esp', function (req, res) {
  valor = req.query.vl
  res.send("<html> "+
           "  <head> "+
           "    <title>teste</title> "+
           "  </head> "+
           "  <body> "+
           "    <div> "+
           "      <h1>OK</h1> "+
           "    </div> "+
           "  </body> "+
           "</html>")
});

app.get('/', function (req, res) {
  res.send("<html> "+
           "  <head> "+
           "    <meta charset= \'UTF-8\' http-equiv=\'refresh\' content=2 /> "+
           "    <title>teste</title> "+
           "  </head> "+
           "  <body> "+
           "    <div> "+
           "      <h1>Nível 6</h1> "+
           "      <div>"+valor+"</div> "+
           "    </div> "+
           "  </body> "+
           "</html>")
});

var porta = process.env.PORT || 3001
app.listen(porta)
