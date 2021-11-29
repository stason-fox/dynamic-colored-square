const square = document.getElementById("square")

// Change square's background color based on key press
document.addEventListener('keydown', function (event) {
    switch (event.key) {
        case 'b':
            square.style.backgroundColor = "blue";
            break;
        case 'r':
            square.style.backgroundColor = "red";
            break;
        case 'y':
            square.style.backgroundColor = "yellow";
            break;
        case 'g':
            square.style.backgroundColor = "green";
            break;
        case 'o':
            square.style.backgroundColor = "orange";
    }
});

// Change square's background color based on mouse action
square.addEventListener("mouseover", function () {
    square.style.backgroundColor = "blue";
})

square.addEventListener("mouseleave", function () {
    square.style.backgroundColor = "white";
})

square.addEventListener("mousedown", function () {
    square.style.backgroundColor = "red";
})

square.addEventListener("mouseup", function () {
    square.style.backgroundColor = "yellow";
})

square.addEventListener("dblclick", function () {
    square.style.backgroundColor = "green";
})

window.addEventListener("scroll", function () {
    square.style.backgroundColor = "orange";
})