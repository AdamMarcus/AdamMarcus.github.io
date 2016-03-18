// // File to hold Java Script

// window.onload = function(){sweetAlert("hi");}

var add = function() {
  var numOne = document.getElementById('num1').value;
  var numTwo = document.getElementById('num2').value;
  alert(numOne + numTwo);
  // now here set the value of an html element to be "Number(numOne) + Number(numTwo)"
}


var putInAlert = function (input)
{
  sweetAlert(input);
}

// var add = function(var1, var2)
// {
//   return var1 + var2;
// }
