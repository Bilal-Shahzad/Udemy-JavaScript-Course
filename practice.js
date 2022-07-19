//varaibles pracice 

var age = 20;
var maxAge = 100;
var numPerDay = 2;
var totalNeeded = (numPerDay * 365) * (maxAge - age);
var message = 'You will need ' + totalNeeded + ' cups of tea to last you until the ripe old age of ' + maxAge;
console.log(message);


var celsius = 30;
var celsiusInF = (celsius*9)/5 + 32;
console.log(celsius + '°C is ' + celsiusInF + '°F');
var fahrenheit = 20;
var fahrenheitInC = ((fahrenheit - 32)*5)/9;
console.log(fahrenheit + '°F is ' + fahrenheitInC + '°C')

//string practice
//DrEvil  It should take a single argument, an amount, and return '<amount> dollars', except it will add '(pinky)' at the end if the amount is 1 million.
function drEvil(amount) {
    if (amount == 1000000) {
      return amount + " dollars (pinky)"; } 
      else { return amount + " dollars";
    }
  }
  //mixUupIt should take in two strings, and return the concatenation of the two strings
  function mixUp(a, b) {
    return b.slice(0, 2) + a.slice(2) + " " + a.slice(0, 2) + b.slice(2);
  }
  //fixStart  It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*',
  function fixStart(s) {
    var c = s.charAt(0);
    return c + s.slice(1).replace(new RegExp(c, 'g'), '*');
  }
  //verbing It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing
  function verbing(word) {
    if (word.length < 3) return word;
    if (word.slice(-3) == 'ing') {
      return word + 'ly';
    } else {
      return word + 'ing';
    }
  }