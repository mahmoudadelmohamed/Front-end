/*var winH = window.innerHeight ;

var x = document.getElementById('upperbar').offsetHeight;
var y = document.getElementById('navbar').offsetHeight;
var res = document.getElementById('slider').offsetHeight = winH - (x + y);
console.log(res);
/**/
$(function() {
   var x = window.innerHeight,
   y = document.getElementById('upperbar').offsetHeight,
   z = document.getElementById('navbar').offsetHeight;
  var t = x - (y+z);
    document.getElementById('slider').style.height = t  + "px";
    document.getElementById('carouselinner').style.height = t  + "px";
    document.getElementById('carousel1').style.height = t  + "px";
    document.getElementById('carousel2').style.height = t  + "px";
    document.getElementById('carousel3').style.height = t  + "px";
});


/*
*/
