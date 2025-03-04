let container = document.querySelector('.container');

function squareGrid() {
    
    let gridSizeButton = document.getElementById('gridSize');
     gridSizeButton.addEventListener('click', function() {
        let userChoice = prompt('pick a size (2 to 100');
        container.innerHTML = '';
        createSquares(userChoice);
        coloredSquares();
    })
    
    createSquares()
    coloredSquares()
}

squareGrid()



function createSquares(amount = 16) {
    
    for (let square = 1; square <= amount * amount; square++) {
        let div = document.createElement('div');
        let squareSize = 960 / amount;
        div.style.width = `${squareSize}px`;
        div.style.height = `${squareSize}px`;
        container.append(div);
    }
}



function coloredSquares() {
    
    let squares = document.querySelectorAll('div');
    squares.forEach(function(square) {
    square.addEventListener('mouseover', function() {
        square.style.backgroundColor = 'gainsboro';
       })
    })
}








