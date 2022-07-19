// (console.log()) value of the property name in the given object:
let student = {
    name:"Bilal",
    age: 20
};
console.log (student.name);

//the new property - discount and the corresponding value (7% or 10%) and the new price.
let product = {
    name: "headphones",
    price: 100,
    discount: 0
};
if (product.price > 100) {
  discount = ((product.price / 100) * 10);
  product.price = (product.price - discount);
} else {
  discount = ((product.price / 100) * 7);
  product.price = (product.price - discount);
}
console.log (product.price);
console.log("Updated product:", product);

//Note: To test, un-comment out line discount: "7%".
let prod = {
    name: "headphones",
    price: 83.7,
    discount: "7%",
};
let v

for (key in prod){
  v = ("discount" in prod);
  if (v = true) {
   console.log ("Already discounted by ",prod.discount) 
  }
 else if (product.price > 100) {
  discount = ((product.price / 100) * 10);
  product.price = (product.price - discount);
} else {
  discount = ((product.price / 100) * 7);
  product.price = (product.price - discount);
}
}    
console.log(prod);
// answer - case 1:
console { name: 'headphones', price: '77.84', discount: '7%' }

// answer - case 2:
// Already discounted by 7%.