// const container = document.querySelector('.container');
const gridContainer = document.querySelector('#grid-container');
const size = document.querySelector('.size');
const settings = document.querySelector('.settings')
const showSize = document.querySelector('.show-size');
const selectedSize = document.querySelector('#selected-size');

// Manejador de eventos (funcion principal)
function handleEvent(e) {
    const element = e.target;
    switch (e.type) {
        case 'input':
            showSize.textContent = `${element.value} x ${element.value}`;
            // console.log(e.target);
            break;
        case 'change':
            gridRender(element.value);
            // console.log(e.target.id);
            break;
        case 'mouseover':
            if (element.classList.contains('grid-cell')) {
                element.style.backgroundColor = '#333';
                // console.log(element);

            }
            break;
        case 'click':
            if (e.target.classList.contains('btn')) {
                if (e.target.classList.contains('cleaning')) {
                    const nodes = document.querySelectorAll('.grid-cell');
                    // console.log('presionaste el btn LIMPIAR')
                    nodes.forEach(n => {
                        n.style.backgroundColor = '';
                    })
                }
            }
            // gridContainer.replaceChildren();
            break;
    };
};

// Mostar el grid por defecto
gridRender(selectedSize.value);

// Escucha el input range (preview)
settings.addEventListener('input', handleEvent);
// Escucha el input range (valor establecido)
settings.addEventListener('change', handleEvent);
// Escucha al boton cleaning
settings.addEventListener('click', handleEvent)

// Escucha el paso del mouse por encima de las celdas
gridContainer.addEventListener('mouseover', handleEvent);

// Actualiza el grid
function gridRender(value) {
    gridContainer.replaceChildren();
    const cellSize = 480 / value;
    
    for (let i = 0; i < value * value; i++) {
        const cell = document.createElement('div');
        cell.style.cssText = `
        width: ${cellSize}px;
        height: ${cellSize}px;
        outline: 1px solid #ccc;
        transition: 0.1s;
        `
        cell.classList.add('grid-cell');
        gridContainer.appendChild(cell);
    };
};