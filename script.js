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

var numOfSquares = 6

var easyBtn = document.querySelector('#easyBtn')
var hardBtn = document.querySelector('#hardBtn')
var colors = generateRandomColors(6)
var resetButton = document.querySelector('#reset')

const BACKGROUND_COLOR = '#232323'
var h1Element = document.querySelector('h1')
var squares = document.querySelectorAll('.square')
const pickColor = () => {
	var randomIndex = Math.floor(Math.random() * colors.length)
	return colors[randomIndex]
}
var pickedColor = pickColor()
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplayElement = document.getElementById('message');

easyBtn.addEventListener('click', function() {
	this.classList.add('selected')
	hardBtn.classList.remove('selected')
	messageDisplayElement.textContent = ''
	numOfSquares = 3
	colors = generateRandomColors(numOfSquares)
	pickedColor = pickColor()
	colorDisplay.textContent = pickedColor
	h1Element.style.backgroundColor = 'steelblue'
	for(var i=0;i<squares.length;i++) {
		if(colors[i]) {
			squares[i].style.backgroundColor = colors[i]
		} else {
			squares[i].style.display = 'none'
		}
	}
})

hardBtn.addEventListener('click', function() {
	this.classList.add('selected')
	easyBtn.classList.remove('selected')
	messageDisplayElement.textContent = ''
	numOfSquares = 6
	colors = generateRandomColors(numOfSquares)
	pickedColor = pickColor()
	colorDisplay.textContent = pickedColor
	h1Element.style.backgroundColor = 'steelblue'
	for(var i=0;i<squares.length;i++) {
		squares[i].style.backgroundColor = colors[i]
		squares[i].style.display = 'block'
	}	
})

colorDisplay.textContent = pickedColor
resetButton.addEventListener('click', function() {
	this.textContent = 'New Colors'
	colors = generateRandomColors(numOfSquares)
	pickedColor = pickColor()
	colorDisplay.textContent = pickedColor
	for (var i=0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i]
	}
	h1Element.style.backgroundColor = 'steelblue'
	messageDisplayElement.textContent = ''
})
for (var i=0; i < squares.length; i++) {
	//Add initial colors to squares
	squares[i].style.backgroundColor = colors[i]
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

const changeColors = color => {
	for (var i=0; i<squares.length; i++) {
		squares[i].style.backgroundColor = color
		squares[i].classList.remove('cursorPointer')
	}
}

