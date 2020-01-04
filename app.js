var numSquares = 12;
// DOM selectors
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
var messageDisplay = document.getElementById("messageDisplay");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.getElementById("easyBtn");
var mediumBtn = document.getElementById("mediumBtn");
var hardBtn = document.getElementById("hardBtn");
var veryHardBtn = document.getElementById("veryHardBtn");


// Event Listerners for the buttons
easyBtn.addEventListener("click", function() {
    mediumBtn.classList.remove("selected");
    hardBtn.classList.remove("selected");
    veryHardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    h1.style.background = "steelblue";

    // Generates a grid of 3 squares
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

mediumBtn.addEventListener("click", function() {
    easyBtn.classList.remove("selected");
    hardBtn.classList.remove("selected");
    veryHardBtn.classList.remove("selected");
    mediumBtn.classList.add("selected");
    h1.style.background = "steelblue";

    // Generates a grid of 6 squares
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;


    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
        squares[i].style.display = "block";
    }
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }

});

hardBtn.addEventListener("click", function() {
    mediumBtn.classList.remove("selected");
    easyBtn.classList.remove("selected");
    veryHardBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    h1.style.background = "steelblue";
    //messageDisplay.remove();

    // Generates a grid of 9 squares
    numSquares = 9;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
        squares[i].style.display = "block";
    }
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }

});

veryHardBtn.addEventListener("click", function() {
    mediumBtn.classList.remove("selected");
    easyBtn.classList.remove("selected");
    hardBtn.classList.remove("selected");
    veryHardBtn.classList.add("selected");
    h1.style.background = "steelblue";

    // Generates a grid of 12 squares
    numSquares = 12
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
        squares[i].style.display = "block";
    }
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }

});


// Functionality of the New Colors Button
resetButton.addEventListener("click", function() {
    //alert("Clicked reset button");

    // Generate all new colors
    colors = generateRandomColors(numSquares);

    //Pick a new random color from array
    pickedColor = pickColor();

    // change color display to match picked color
    colorDisplay.textContent = pickedColor;
    this.textContent = "New Colors";
    messageDisplay.textContent = "";
    // Change color of the squares
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }

    h1.style.background = "steelblue";
})

for (var i = 0; i < squares.length; i++) {
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    // adding click listeners to the squares
    squares[i].addEventListener("click", function() {

        // selecting the color of the clicked sqaure
        var clickedColor = this.style.backgroundColor;

        // Comparing the color of the picked square and the target color
        if (clickedColor === pickedColor) {

            // Player wins
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?";
            changeColors(clickedColor);
            h1.style.background = clickedColor;
        } else {
            this.style.backgroundColor = "#232323";
            //alert("wrong");
            messageDisplay.textContent = "Try Again";
        }

    });

}

function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = color;

    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];

}


function generateRandomColors(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColor())
    }
    return arr;
}

// Funtion to generate a random color
function randomColor() {

    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";


}