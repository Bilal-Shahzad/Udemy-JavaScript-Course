//Create an array with 6 of your favorite foods. With the loop of your choice, iterate through the array, but only print out the foods with an even index.
const favoriteFoods =["salami","sausages","oreo","cola","pizza","sushi"];
for (i=0; i<=favoriteFoods.length; i++){
  if (i % 2 === 0) {
    console.log (i);
  }
}


//Check if the word appears in given array and print out if it does or doesn’t:
let word = "miami";
let arr = ["bcn", "mia", "sao", "mex", "par", "miami", "ams", "ber", "paris", "lis", "mad"];
for (i=0; i<=arr.length; i++){
  if (word === arr[i]){
    console.log ("Appear");
  }else {
      console.log ("Not Appear");
    }
}

//Given array of numbers, calculate the sum:
const prices = [10.99, 44.56, 112.79, 3, 5];
let sum = 0; // start value for the sum

for (i=0; i<=prices.length; i++){
  sum += prices[i];
}
sum.toFixed(2);
console.log (sum);

