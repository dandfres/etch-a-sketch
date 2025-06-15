// const container = document.querySelector('.container');
const gridContainer = document.querySelector('#grid-container');
const gridSize = document.querySelector('.grid-size');

// Obtiene y muestra el valor del input (range)
const showSize = document.querySelector('.show-size');
const selectedSize = document.querySelector('#selected-size');

// Mostar el valor por defecto del grid
gridRender(selectedSize.value);

function handleEvent(e) {
    switch (e.type) {
        case 'input':
            showSize.textContent = `${e.target.value} x ${e.target.value}`;
            // console.log(e.type);
            break;
        case 'change':
            gridRender(e.target.value);
            // console.log(e.type);
            break;
        case 'mouseover':
            if (e.target.classList.contains('grid-cell')) {
                // console.log("pasaste por un div de grid container");
                e.target.classList.add('painted');
            }
    };
};

gridSize.addEventListener('input', handleEvent);
gridSize.addEventListener('change', handleEvent);
gridContainer.addEventListener('mouseover', handleEvent);

// Actualiza el grid
function gridRender(value) {
    gridContainer.replaceChildren();
    const cellSize = 480 / value;
    
    for (let i = 0; i < value * value; i++) {
        const cell = document.createElement('div');
        cell.classList.add('grid-cell');
        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;
        gridContainer.appendChild(cell);
    };
};