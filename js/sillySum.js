function sillySum(arr) {
  var sum = 0
  for (var i = 0; i<arr.length; i++) {
    sum = sum + i*arr[i]
  }
  return sum
}

console.log("Silly sum = " + sillySum([1, 2, 3, 4]))
