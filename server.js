const express = require('express');
const app = express();

/*const fetch = require('node-fetch')

const url = 'http://177.91.195.245:8080'
//const url = 'http://172.17.210.225/' 
let valor = ''
const request = async () => {
  const response = await fetch(url);
  const retorno = await response.text();

  valor = retorno.slice(retorno.search("<h3>")+4, retorno.search("</h3>"))
  console.log(valor)
}.query

*/

app.get('/', function (req, res) {
  //request();
  res.send("<html> "+
           "  <head> "+
           "    <meta charset= \'UTF-8\' http-equiv=\'refresh\' content=2 /> "+
           "  </head> "+
           "  <body> "+
           "    <div> "+
           "      <h1>Nível 3</h1> "+
           "      <div>"+req.query.valor+"</div> "+
           "    </div> "+
           "  </body> "+
           "</html>")
});

var porta = process.env.PORT || 3001
app.listen(porta)
