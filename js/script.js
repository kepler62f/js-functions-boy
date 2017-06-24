
// console.log('linked to my html')
//
// function pausecomp (millis) {
//   var date = new Date()
//   var curDate = null
//   while (curDate - date < millis) {
//     curDate = new Date()
//   }
// }
//
// pausecomp(10000)


// var answer = prompt('Please type a number')
//
// function higherOrLower (guess, random) {
// 		updateH1('lower, randomNumber is ' + random)
// 	if guess > random
// 	else if (g < r)
// 		higher
// 	else correct
// }
//
// function genRandom (min, max) { //inclusive of max
// 	return Math.floor(Math.random() * (max - min) + min)
// }
//
// function updateH1 (newH1) {
// 	var h1 = document.querySelector('h1')
// 	// var h2 = document.getElementsByTag('h1')
// 	h1.textContent = newH1
// }







// update the h1 to say higher or lower // or if the number guess is correct, we change the body color // fn that checks numbers with the random number

function higherOrLower (guessedNum, randomNumber) {
  var Wrong = true
  console.log('randomNumber is', randomNumber)
  if (guessedNum > randomNumber) {
    updateH1('lower, randomNumber is ' + randomNumber)
    return Wrong
  } else if (guessedNum < randomNumber) {
    updateH1('higher, randomNumber is ' + randomNumber)
    return Wrong
  } else {
    updateH1('correct')
    Wrong = false
    return Wrong
  }
}

// this fn. updates h1 text content
function updateH1(newH1) {
  var h1 = document.querySelector('h1')
  // var h1 = document.getElementsByTagName('h1')
  // updated the property of h1 dom node
  h1.textContent = newH1
}

  // fn that generates randomNum
  // min and max always whole number
  // random number between min and max (exclusive)

  function randomNumber (min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}

  // calling of the function
var RN = randomNumber(0, 7)
console.log("RN:" + RN)
var wrong = true
var answer = 0

while (wrong) {
  answer = parseInt(prompt('Please type a number'))
  console.log("ans" + answer)
  wrong = higherOrLower(answer, RN)
}
  // changed 7 into the prompt number
