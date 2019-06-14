// npm install mysql
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'inbetween',
    //port: 3306, // default already 3306
    debug: false
});


// Create Database
connection.query('CREATE DATABASE IF NOT EXISTS inbetween');

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



connection.query('USE inbetween');
// Drop table
// connection.query('DROP TABLE IF EXISTS questions');
// Create table
connection.query('CREATE TABLE IF NOT EXISTS questions(' +
    'id INT NOT NULL AUTO_INCREMENT,' +
    'question VARCHAR(80) NOT NULL, ' +
    'question_type VARCHAR(80) NOT NULL, PRIMARY KEY(id))');
// Bootstrap table
connection.query('INSERT INTO questions(question, question_type)' +
' VALUES ("Who are you?", "Deep")');
connection.query('INSERT INTO questions(question, question_type)' +
' VALUES ("What is your favorite animal and why?", "Ice Breaker")');
connection.query('INSERT INTO questions(question, question_type)' +
' VALUES ("If you were an object in this room which object would you be and why?", "Ice Breaker")');

connection.query('INSERT INTO questions(question, question_type)' +
' VALUES (?, ?)', ["What do you bring in your wallet now?", "Ice Breaker"]);

connection.query('SELECT * FROM questions').on('result', function(row){
    console.log(row.question + ':' + row.question_type);
});

connection.query('SELECT * FROM questions', function(error, result){
    if(error)
        throw error;
    for(i = 0; i < result.length; i++)
        console.log(result[i].question + " : " + result[i].question_type);
});

//connection.end();