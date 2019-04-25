// show what ever you write in display
function showNumber(num) {
    var show = document.getElementById('input');
         if(num === 1)show.value += '1';
         else if(num === 2) show.value += '2';
         else if(num === 3) show.value += '3';
         else if(num === 4) show.value += '4';
         else if(num === 5) show.value += '5';
         else if(num === 6) show.value += '6';
         else if(num === 7) show.value += '7';
         else if(num === 8) show.value += '8';
         else if(num === 9) show.value += '9';
         else if(num === 0) show.value += '0';
         else if(num === '*') show.value += '*';
         else if(num === '.') show.value += '.';
         else if(num === '+') show.value += '+';
         else if(num === '-') show.value += '-';
         else if(num === '%') show.value += '%';
         else if(num === '/') show.value += '/';
         else show.value += '00';
}
// remove all numbers from display
var clear = document.getElementById('clear');
clear.onclick = function() {
    document.getElementById('input').value = "";
    document.getElementById('answer').value = "";
}
// Calculate most mathmatic operations (+,/,-,*)
function getAnswer() {
    var x = document.getElementById('input').value;
    var a = eval(x);
    document.getElementById('answer').value = a;
    document.getElementById('input').value = "";
}
// remove last digit in number
 function removeLast() {
      var inputValue = document.getElementById('input').value, x;
      if(inputValue.length > 0) {
        x = inputValue.slice(0,-1);
        document.getElementById('input').value = x;
      }
}






/* function printValue() {
    var show = document.getElementsByClassName('butt').value;
      document.getElementById('demo').innerHTML = show;
}
/* for(var i = 0; i < print.length; i ++) {
    var x =  document.getElementsByClassName('butt')[i].innerHTML;
    console.log(x);
}
/*myButton = document.getElementById('butt');
myButton.onclick = function() {
     var items = document.getElementsByClassName('items');
     var show = 0;
     for(var i = 0; i < items.length; i ++) {
            show += Number(items[i].value);
     }
     document.getElementById('demo').innerHTML = "Sum: " + show;
}
/**/
