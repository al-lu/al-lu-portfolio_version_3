/***********************************
***    Automatic image slider    *** 
***********************************/

var myIndex = 0;
var Index = 0;
carousel();

function carousel() {
  var i;
  var j;
  var x = document.getElementsByClassName("slide");
  var y = document.getElementsByClassName("ps-content");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  

  for (j = 0; j < y.length; j++) {
    y[j].style.display = "none";  
  }
  Index++;
  if (Index > y.length) {Index = 1}    
  y[Index-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

/********************************
***    Manual image slider    *** 
********************************/
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var j;
  var x = document.getElementsByClassName("slide");
  var y = document.getElementsByClassName("ps-content"); 
  if (n > x.length) {slideIndex = 1}
  if (n > y.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  if (n < 1) {slideIndex = y.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  

  for (j = 0; j < y.length; j++) {
    y[j].style.display = "none";  
  }
  y[slideIndex-1].style.display = "block";  
}