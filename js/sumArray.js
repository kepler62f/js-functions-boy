function sumArray(arr) {
  var sum = 0
  for (var i = 0; i<arr.length; i++) {
    sum = sum + arr[i]
  }
  return sum
}

function multiplyArray(arr) {
  var product = 1
  for (var i = 0; i<arr.length; i++) {
    product = product * arr[i]
  }
  return product
}

console.log("sum = " + sumArray([1,2,3,4]))
console.log("product = " + multiplyArray([1,2,3,4]))
