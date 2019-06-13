
window.onload = loadquestion;

function loadquestion() {
      var questions = [
        {
          text: "What do you bring in your wallet now ?",
          img: "http://wdy.h-cdn.co/assets/cm/15/10/54f5fb6cbdbb5_-_1-red-wallet-open-lgn.jpg"
          /*img:  "https://jaykeem.files.wordpress.com/2011/08/whats-in-your-wallet1bmp.jpg"*/
        },
        {
          text: "Who are you ?",
          img:  "https://martinabex.files.wordpress.com/2013/01/bhc-who-are-you.jpg"
        },
        {
          text: "What is your favorite animal and why?",
          img:  "http://image.slidesharecdn.com/whatisyourfavouriteanimal1-141009071717-conversion-gate02/95/what-is-your-favourite-animal1-1-638.jpg%3Fcb%3D1412839088&f=1"
        },
        {
          text: "If you were an object in this room, which object would you be and why?",
          img:  "http://sims4updates.com/wp-content/uploads/2015/03/tumblr_nkqfauyOdY1rqviego3_1280.jpg"
        }
      ];
      var question = questions[Math.floor(Math.random() * questions.length)];
     
       
        if(question.img == "") 
	   {
	      document.getElementById("question").innerHTML = '<div class="card main">' + question.text + '</div>' + '<img src="' + question.img + '">';
	   }
        else {
           document.getElementById("question").innerHTML =  '<div class="card main">' + question.text + '</div>' + '<img width="30%" src="' + question.img + '">';
        }
}
    

