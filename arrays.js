//remove the first two elements of the array,
//replace the last element in the array with the word “last”.

const animalArray = ["dog", "cat", "fish"];
animalArray.push ("lizard","cricket");
console.log (animalArray);
animalArray.splice (0,2);
console.log (animalArray);
animalArray.pop ()
animalArray.push ("last");
console.log (animalArray);


//Given array of numbers, calculate the sum:
const prices = [10.99, 44.56, 112.79, 3, 5];
let sum = 0; // start value for the sum

for (i=0; i<=prices.length; i++){
  sum += prices[i];
}
sum.toFixed(2);
console.log (sum);