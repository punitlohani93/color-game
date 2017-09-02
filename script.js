var numOfSquares = 6
var colors = []
var pickedColor;
const BACKGROUND_COLOR = '#232323'
var resetButton = document.querySelector('#reset')
var modeButtons = document.querySelectorAll('.mode')
var h1Element = document.querySelector('h1')
var squares = document.querySelectorAll('.square')
var messageDisplayElement = document.getElementById('message');

const getRandomColor = () => {
	var red = Math.floor(Math.random() * 256)
	var green = Math.floor(Math.random() * 256)
	var blue = Math.floor(Math.random() * 256)
	return `rgb(${red}, ${green}, ${blue})`
}

const generateRandomColors = num => {
	var arr = []
	for (var i=0;i<num;i++) {
		arr.push(getRandomColor())
	}
	return arr
}

const pickColor = () => {
	var randomIndex = Math.floor(Math.random() * colors.length)
	return colors[randomIndex]
}

const setUpModeButtons = () => {
	for(var i=0;i<modeButtons.length;i++) {
		modeButtons[i].addEventListener('click', function() {
			for(var j=0;j<modeButtons.length;j++) {
				modeButtons[j].classList.remove('selected')
			}
			this.classList.add('selected')
			if(this.textContent === "Easy") {
				numOfSquares = 3
			} else {
				numOfSquares = 6
			}
			reset()
		})
	}
}

const setUpSquares = () => {
	for (var i=0; i < squares.length; i++) {
		squares[i].classList.add('cursorPointer')
		//Add click listeners to each square
		squares[i].addEventListener('click', function() {
			if (this.style.backgroundColor === pickedColor) {
				messageDisplayElement.textContent = 'Correct!'
				messageDisplayElement.style.color = '#5CB85C'
				resetButton.textContent = "Play Again?"
				changeColors(pickedColor)
				h1Element.style.backgroundColor = pickedColor
			} else {
				this.style.backgroundColor = BACKGROUND_COLOR
				this.classList.remove('cursorPointer')
				messageDisplayElement.textContent = 'Try Again!'
				messageDisplayElement.style.color = '#D9534F'
			}
		})
	}
}

const initialize = () => {
	setUpModeButtons()
	setUpSquares()
	reset()	
}

initialize()

function reset() {
	resetButton.textContent = 'New Colors'
	colors = generateRandomColors(numOfSquares)
	pickedColor = pickColor()
	colorDisplay.textContent = pickedColor
	for (var i=0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.display = 'block'
			squares[i].style.backgroundColor = colors[i]
		} else {
			squares[i].style.display = 'none'
		}
	}
	h1Element.style.backgroundColor = 'steelblue'
	messageDisplayElement.textContent = ''
}

colorDisplay.textContent = pickedColor
resetButton.addEventListener('click', function() {
	reset()
})

const changeColors = color => {
	for (var i=0; i<squares.length; i++) {
		squares[i].style.backgroundColor = color
		squares[i].classList.remove('cursorPointer')
	}
}
