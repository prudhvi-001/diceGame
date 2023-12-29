
var p1 = Math.floor(Math.random()*6+1);
var p2 = Math.floor(Math.random()*6+1);


var l1 = "images/dice"+p1+".png";
document.querySelectorAll("img")[0].setAttribute("src",l1);
var l2 = "images/dice"+p2+".png";
document.querySelectorAll("img")[1].setAttribute("src",l2);
if(p1 > p2){
    document.querySelector("h1").textContent = "Player 1 win the game";
}
else if(p2>p1){
    document.querySelector("h1").textContent = "Player 2 win the game";
}
else{
    document.querySelector("h1").textContent = "Match Draw";
}