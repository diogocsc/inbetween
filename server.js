const express = require('express');
const app = new express();
var path = require('path');

app.use((request, response, next) => {
    console.log(request.headers);
    next();
  })

app.get('/', function(request, response){
    response.sendFile(path.join(__dirname, '.', 'index.html'));
})
app.use(express.static('.'))

app.listen(8124);
console.log("Listening on port 8124");

