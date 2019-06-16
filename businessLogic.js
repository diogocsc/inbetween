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

function listQuestions(qtype=''){

   if(qtype=''){
       //lists all questions
  
        questions = connection.query('Select questions, question_type FROM questions', function (err, rows, fields) {
             if (err) throw err;
             return rows;
         } );
    }
    // list questions by Type
    else {
        questions = connection.query('Select questions, question_type FROM questions WHERE type='+qtype, function (err, rows, fields) {
            if (err) throw err;
            return rows;
        } );
    }
    return questions;
}

console.log(questions);
connection.end();

// respond with "questions" when a GET request is made to questions

app.get('/questions', function (req, res) {
    res.send(listQuestions);
  })


