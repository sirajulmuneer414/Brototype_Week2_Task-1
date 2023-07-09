var search = document.getElementById("searchBar");
var slash = document.getElementById("slash");
var burger =document.getElementById("burger");
var clickBar=document.getElementById("clickbar");
var burgerClick = 0;
var moonClick =0;

console.log(burger)
console.log(slash);
console.log(clickBar);
search.onclick=function clicked(){
    search.setAttribute('id','clicked');
    slash.style.visibility = "hidden";
    
}
search.onblur = function() {
    search.setAttribute('id', 'searchBar');
    slash.style.visibility = "visible";
}
burger.onclick=function burgerclick(){
    burgerClick++;
    if(burgerClick%2==1){
        clickBar.style.display = "block";
    }
    else{
        clickBar.style.display = "none";
    }
}
burger.onblur = function(){
    clickBar.style.display = "none";
}
var moonSun = document.getElementById("moon");
var tryAng = document.getElementById('triangle');
var bG = document.getElementsByTagName("body");
var cardText1 = document.getElementById("card-text1");
var cardText2 = document.getElementById("card-text2");
var cardText3 = document.getElementById("card-text3");
var webDev = document.getElementById("webDev");
var learnMore = document.getElementById("learn");
moonSun.onclick = function(){
    moonClick++;
    if(moonClick%2==1){
        moonSun.innerHTML = "dark_mode"
        bG[0].style.backgroundColor="#303030";
        cardText1.style.color = "#fff";
        cardText2.style.color = "#fff";
        cardText3.style.color = "#fff";
        webDev.style.color = "#fff";
        tryAng.style.backgroundColor = '#3b3b3b';
        learnMore.style.backgroundColor = '#3b3b3b';
    
    }
    else{
        moonSun.innerHTML = "light_mode"
        bG[0].style.backgroundColor="#fff";
        cardText1.style.color = "rgb(68, 68, 68)";
        cardText2.style.color = "rgb(68, 68, 68)";
        cardText3.style.color = "rgb(68, 68, 68)";
        webDev.style.color = "#000";
        tryAng.style.backgroundColor = "rgb(255, 255, 255)";
        learnMore.style.backgroundColor = '#fff';

    }
}