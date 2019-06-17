//import "businessLogic.js"

const express = require('express');
const app = new express();
var path = require('path');
var businessLogic = require('./businessLogic');

app.use((request, response, next) => {
    console.log(request.headers);
    next();
  })

app.get('/', function(request, response){
    response.sendFile(path.join(__dirname, '.', 'index.html'));
})
//when there is a call to questions
app.get('/questions', function(request, response){
  //data = businessLogic.listQuestions();
  data="a,b,c"; //test data
  //while(flag == "STOP"){
    // waits until flag is different from STOP
  //}
  //console.log("about to print data");
  //console.log(data);
  response.send(data);
})



app.use(express.static('.'))

app.listen(8124);
console.log("Listening on port 8124");

