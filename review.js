
//variables practice
v1 = 1; 
var v2 = 2; // Variable defined with var keyword 
 
function f() {
    v3 = 3; 
    var v4 = 4; 
    var v5 = v1+v2+v3; //1+2+3=6 
}

//strings
 String.toLowerCase()
*/
function lowerCase(str) {
 return str.toLowerCase();
}

// String.toUpperCase()
function upperCase(str) {
 return str.toUpperCase();
}


//Convert string to camelCase text.

function camelCase(str) {
 str = replaceAccents(str);
 str = removeNonWord(str)
   .replace(/\-/g, " ") //convert all hyphens to spaces
   .replace(/\s[a-z]/g, upperCase) //convert first char of each word to UPPERCASE
   .replace(/\s+/g, "") //remove spaces
   .replace(/^[A-Z]/g, lowerCase); //convert first char to lowercase
 return str;
}


 //Add space between camelCase text.

function unCamelCase(str) {
 str = str.replace(/([a-z\xE0-\xFF])([A-Z\xC0\xDF])/g, "$1 $2");
 str = str.toLowerCase(); //add space between camelCase text
 return str;
}


//UPPERCASE first of each word.

function properCase(str) {
 return lowerCase(str).replace(/^\w|\s\w/g, upperCase);
}

 //camelCase + UPPERCASE first char

function pascalCase(str) {
 return camelCase(str).replace(/^[a-z]/, upperCase);
}


//constructor
// Creating objects using functions that return an object:
function cat(name, hairColor) {
    return {
      name: name,
      hairColor: hairColor
    }

  
  var freddie = cat('Freddie','black')
  console.log;{ name: 'Freddie', hairColor: 'black'  } */
  
  var delilah = cat('Sam','grey') 
console.log;{ name: 'Sam', hairColor: 'grey'  }
  