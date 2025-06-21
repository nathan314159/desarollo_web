
function mostrarValor(valor) {
    document.getElementById("resultado").textContent = "Escribiste: " + valor;
}



const input = document.getElementById("miInput");
const resultado = document.getElementById("res");

input.addEventListener("input", function () {
    resultado.textContent = "Escribiste: " + input.value;
});
