var search = document.getElementById("searchBar");
var slash = document.getElementById("slash");
var burger =document.getElementById("burger");
var clickBar=document.getElementById("clickbar");
var burgerClick = 0;

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