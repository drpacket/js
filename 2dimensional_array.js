

function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i.length]; j++) {
      console.log(arr[i][i]);
      console.log("product-before: " + product);
      product = product * arr[i][j];
      console.log("product-after: " + product);
    }
    // product *= arr[i];
  }
  // Only change code above this line
  return product;
}

// Modify values below to test your code
multiplyAll([[1,2],[3,4],[5,6,7]]);

// Modify values below to test your code
console.log(multiplyAll([[1,2],[3,4],[5,6,7]]));

