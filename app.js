var express = require('express');
var app = express();

app.get('/hello', function (req, res) {
   return res.send('Hello World');
})

app.listen(8081);
console.log('App listening on port 8081');
