
/*var questions = [
  "What do you bring in your wallet now ?",
  "Who are you ?",
  "What is your favorite animal and why?",
  "If you were an object in this room, which object would you be and why?"     
];
*/
// Check for the various File API support.
if (window.File && window.FileReader && window.FileList && window.Blob) {
  // Great success! All the File APIs are supported.
} else {
  alert('The File APIs are not fully supported in this browser.');
}

var questions = [];
var playCards = questions;
var usedDeck = [];
var reader = new XMLHttpRequest() || new ActiveXObject('MSXML2.XMLHTTP');


function getQuestions (){
  xhr=new XMLHttpRequest();
  xhr.open("GET", "http://localhost:8124/questions", true);
  xhr.send();
  xhr.onreadystatechange=function(){
    if(xhr.readyState==4 && xhr.status==200){
      console.log(xhr.responseText);
      questions = xhr.responseText.split(","); 
      playCards = questions;
      startMeUp();
    }
  }
 
  
}

getQuestions();


//function loadFile() {
//   reader.open('get', 'questions.txt', true); 
  //reader.open('get', 'questions.json', true); 
  //  reader.onreadystatechange = displayContents;
  //  reader.onloadend = startMeUp;
//    reader.onloadend = displayContents;

 //   reader.send(null);
//}

//function displayContents() {
//    if(reader.readyState==4) {
      //  var el = document.getElementById('main');
      //  el.innerHTML = reader.responseText;
     // var aux=JSON.parse(reader.responseText);
     // console.log(aux);
     // questions = JSON.parse(aux,(key,value) =>{
    //  questions =  reader.responseText.split(",");
     // }
     // )
  //    playCards = questions;
  //    startMeUp();

  //  }
 //   else {
//      questions = ['No questions'];
//    }
//}

// finish reading data from file

//loadFile();

function startMeUp() {
  if (document.readyState == 'complete' ) {
    loadquestion();
  } else {
    document.onreadystatechange = function () {
        if (document.readyState === "complete") {
          loadquestion();
        }
    }
  }
}

function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }
}
//addLoadEvent(loadcanvas);

/* borrowed from https://www.htmlgoodies.com/beyond/javascript/article.php/3724571/Using-Multiple-JavaScript-Onload-Functions.htm*/




function loadquestion() {

      var ixquestion = Math.floor(Math.random() * playCards.length);
      var question = playCards[ixquestion];
      usedDeck.push(question);
      playCards.splice(ixquestion,1);

      if(question == undefined) {
        question = "No More Questions. Restart If you want to continue."
      }
        document.getElementById("question").innerHTML = ' <div class="card main"> ' + question + '</div>' 
      
}

function restart(){
  
  getQuestions();
  usedDeck = [];
  playCards = questions;
  loadquestion();
  
}

/*   removed this as it doesn't seem relevant for now (2019-05-31)     
function loadcanvas(){    
var canvas = document.createElement("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);
var ctx = canvas.getContext("2d");
var x = 0;
var y = 0;
setInterval(
function () {
ctx.clearRect(x - 1, y - 1, 40, 40);
ctx.fillStyle = "#33f";
ctx.fillRect(x, y, 35, 35);
x += .5;
y += .5;
},
20 // take 20 milliseconds, or 50 times per second.
);
}
*/