var button = document.querySelector('button')
var body = document.querySelector('body')
var text = document.querySelector('.color')
var score = 0
var scorehtml = document.querySelector('.score')

function randomFn (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function changeBGColor () {
  var arr = ['red', 'green', 'blue', 'yellow', 'orange']
  body.style.backgroundColor = arr[randomFn(0, 4)]
}

function changeText () {
  var arr = ['red', 'green', 'blue', 'yellow', 'orange']
  text.innerHTML = arr[randomFn(0, 4)]
}

function change () {
  changeBGColor()
  changeText()
}


//function colorChanger () {
  // var r = randomFn(0, 255)
  // var g = randomFn(0, 255)
  // var b = randomFn(0, 255)
  // var o = Math.random()

  // rgba(5, 38, 96, 1)
  //return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + o + ')'
//}

var button = document.createElement('button')
button.innerHTML = 'Start'
var buttonLocation = document.getElementsByTagName('h3')[0]
buttonLocation.appendChild(button)

button.addEventListener('click', function () {
  // setTimeout(afterTimeout, 5000)
  setInterval(change, 1600)
})

var button2 = document.createElement('button')
button2.innerHTML = 'Hit!'
var buttonLocation = document.getElementsByTagName('h3')[1]
buttonLocation.appendChild(button2)

// add score if color and text same
button2.addEventListener('click', function () {

  console.log('text'+text.innerHTML)
  console.log('bg'+body.style.backgroundColor)

  if (text.innerHTML === body.style.backgroundColor) {
    score += 1
    scorehtml.innerHTML = score
  }

})
