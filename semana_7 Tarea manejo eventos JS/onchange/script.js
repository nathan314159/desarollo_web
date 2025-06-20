// --------- JavaScript ---------

// Captura el primer cuadrado (el que se usa con onchange)
const cuadrado1 = document.getElementById('cuadrado1');

// Función que cambia el color de fondo del primer cuadrado según el valor recibido
function cambiarColor(color) {
    cuadrado1.style.background = color;
}

// Captura el segundo cuadrado y su select
const cuadrado2 = document.getElementById('cuadrado2');
const selectColor = document.getElementById('select-color');

// Cuando se detecta un cambio en el select...
selectColor.addEventListener('change', function () {
    const color = selectColor.value; // Toma el valor del color seleccionado
    cuadrado2.style.background = color; // Cambia el fondo del segundo cuadrado
});