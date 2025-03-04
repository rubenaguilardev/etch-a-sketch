let container = document.querySelector('.container')

for (let square = 1; square <= 256; square++) {
    let div = document.createElement('div')
    container.append(div)
}

let squares = document.querySelectorAll('div');
squares.forEach(function(square) {
    square.addEventListener('mouseover', function() {
        square.style.backgroundColor = 'red'
    })
})



