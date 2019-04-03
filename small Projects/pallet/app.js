function Fun() {
  var x = document.getElementById('myRange').value;
  var y = document.getElementById('myRange1').value;
  var z = document.getElementById('myRange2').value;
    document.getElementById("demo").value =  x;
    document.getElementById('demo1').value = y;
    document.getElementById('demo2').value = z;
    document.body.style.backgroundColor = 'rgb(' + x + ',' + y + ',' + z + ')';
    document.getElementById('rgb').innerHTML = 'RGB = ' + " " + x + " ," + y + " ," + z;
}
