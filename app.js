// Toma y muestra el valor del input (range)
const selectedRange = document.querySelector('#selected-range');
const rangePreview = document.querySelector('.range-preview');

selectedRange.addEventListener('input', () => {
    rangePreview.textContent = `${selectedRange.value} x ${selectedRange.value}`;
});