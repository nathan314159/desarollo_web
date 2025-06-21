//  Funciones para el input sin addEventListener
function mostrarKeyDown(e) {
    document.getElementById("salida1").textContent = "Key Down: " + e.key;
}

function mostrarKeyUp(e) {
    document.getElementById("salida1").textContent = "Key Up: " + e.key;
}

//  Código para el input con addEventListener
const input2 = document.getElementById("input2");
const salida2 = document.getElementById("salida2");

input2.addEventListener("keydown", function (e) {
    salida2.textContent = "Key Down: " + e.key;
});

input2.addEventListener("keyup", function (e) {
    salida2.textContent = "Key Up: " + e.key;
});