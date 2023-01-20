var firstmessage = "Hello my name is Alexander Yeh";
var i = 0;
var speed = 100; 

function typeWelcome() {
  if (i < firstmessage.length) {
    document.getElementById("welcome").innerHTML += firstmessage.charAt(i);
    i++;
    setTimeout(typeWelcome, speed);
    }
}

typeWelcome()