const express = require('express');
const app = express();

let valor = 0

app.get('/esp', function (req, res) {
  valor = req.query.vl
  
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  
  //console.log(req.query)
  res.end('Ok')  
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
