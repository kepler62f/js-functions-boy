
function maxOfThree(num1, num2, num3) {

// Define a function maxOfThree that takes three numbers as
// arguments and returns the largest of them. Use the if-then-else
// construct available in Javascript.


// rewrite compare 2 function...to return index 1, 2 or 3

  if (num1 > num2) {
    if (num1 > num3) {
      return num1;
    } else {
      return num3;
    }
  } else if (num2 > num3) {
      return num2;
  } else {
    return num3;
  }
} // end of function


// prompt doesn't work on node?
// var a = parseInt(prompt("Enter num1:"));
// var b = parseInt(prompt("Enter num2:"));
// var c = parseInt(prompt("Enter num3:"));

var max3 = maxOfThree(8, 10 , 11);
console.log(max3);
