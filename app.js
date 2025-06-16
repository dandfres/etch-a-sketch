// const container = document.querySelector('.container');
const settings = document.querySelector('.settings')
const size = document.querySelector('.size');
const showSize = document.querySelector('.show-size');
const selectedSize = document.querySelector('#selected-size');
const erase = document.querySelector('.erase');
const rainbow = document.querySelector('.rainbow');
const colorBtn = document.querySelector('#color-btn');
const gridContainer = document.querySelector('#grid-container');


// Manejador de eventos (funcion principal)
let color = colorBtn.value;
let isRainbowMode = false;

function handleEvent(e) {
    let element = e.target;
    switch (e.type) {
        case 'input':
            if (element.type === 'range')
            showSize.textContent = `${element.value} x ${element.value}`;
            // console.log(element);
            break;
        case 'change':
            // console.log(element.id);
            if (element.type === 'range') {
                gridRender(element.value);
            } else if (element.type === 'color') {
                // console.log('color');
                color = `${element.value}`;
            }
            break;
        case 'mouseover':
            if (element.classList.contains('grid-cell')) {
                element.style.backgroundColor = isRainbowMode ? getRandomColor() : color;
                // console.log(element);
            }
            break;
        case 'click':
            if (element.classList.contains('btn')) {
                if (element.classList.contains('cleaning')) {
                    const nodes = document.querySelectorAll('.grid-cell');
                    // console.log('presionaste el btn LIMPIAR')
                    nodes.forEach(n => {
                        n.style.backgroundColor = '';
                    });
                } else if (element.classList.contains('erase')) {
                    // console.log('presionaste el boton borrador');
                    if (color === '') {
                        erase.classList.toggle('btn-active');
                        color = colorBtn.value;
                    } else {
                        erase.classList.toggle('btn-active');
                        color = '';
                    };
                } else if (element.classList.contains('rainbow')){
                    isRainbowMode = !isRainbowMode;
                    element.classList.toggle('btn-active');
                }
            };
            // gridContainer.replaceChildren();
            break;
    };
};

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

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
        outline: 1px solid #cccccc;
        transition: 0.1s;
        `
        cell.classList.add('grid-cell');
        gridContainer.appendChild(cell);
    };
};