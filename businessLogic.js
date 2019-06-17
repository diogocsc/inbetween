var express = require('express');
var app = express();
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rootAdmin123!',
    database: 'inbetween',
    //port: 3306, // default already 3306
    debug: false
});
var questions=[];

//flag serves the purpose of informing server.js that listquestion is already finished. 
// GO and STOP are the two values of flag.

var flag = "STOP";

// checks if connection is failing and responds appropriately

connection.connect(function (err) {
    if (err) {
        //mysql.ERROR_
        console.error('Could not establish a connection to the database');
        return;
    }
});

connection.on('error', function (err) {
    console.error('something bad happened ' + err);
});

// lists existing questions - either all or the ones that match a given question type


module.exports = {
listQuestions: function (qtype=''){

   if(qtype==''){
       //lists all questions

 //      connection.connect(function(err) {
     console.log ( "listQ 1");
        var a=connection.query('Select question FROM questions', function (err, rows, fields) {
            if (err) throw err;
           console.log("Go rows");
           console.log(rows);
           flag="GO";
             return rows;
         } );


    }
    // list questions by Type
    else {
        questions = connection.query('Select question FROM questions WHERE type='+qtype, function (err, rows, fields) {
            if (err) throw err;
            return rows;
        } );
    }
    console.log ( "listQ 2");

}
}

console.log(questions);
//connection.end();

// respond with "questions" when a GET request is made to questions

app.get('/questions', function (req, res) {
    res.send(listQuestions);
  })


