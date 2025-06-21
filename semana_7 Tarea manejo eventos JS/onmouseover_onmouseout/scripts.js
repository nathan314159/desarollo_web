// Obtiene el elemento con id "cuadro2"
const cuadro2 = document.getElementById('cuadro2');

// Evento que se ejecuta cuando el mouse entra al cuadro
cuadro2.addEventListener('mouseover', function () {
    cuadro2.style.backgroundColor = 'lightgreen';  // Cambia color al pasar el mouse
});

// Evento que se ejecuta cuando el mouse sale del cuadro
cuadro2.addEventListener('mouseout', function () {
    cuadro2.style.backgroundColor = 'lightcoral';  // Vuelve al color original
});
