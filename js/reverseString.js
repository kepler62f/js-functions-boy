function reverseString(inputString) {
  var reverseString = ""
  for (i = inputString.length-1; i >= 0; i--) {
    reverseString += inputString[i]
  }
  return reverseString
}
console.log(reverseString("the flash"))
