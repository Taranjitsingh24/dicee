var randomNumber1 = Math.floor(Math.random() * 6)  + 1;
var image = "images/dice"+randomNumber1+".png";
var setImage = document.querySelectorAll("img")[0];
setImage.setAttribute("src", image);

var randomNumber2 = Math.floor(Math.random() * 6)  + 1;
var image = "images/dice"+randomNumber2+".png";
var setImage = document.querySelectorAll("img")[1];
setImage.setAttribute("src", image);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player1 is winner";
}
else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player2 is winner";
}
else {
    document.querySelector("h1").innerHTML = "it's Draw, Try again!";

}