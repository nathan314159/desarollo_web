// Esta función se ejecuta cuando se carga la página, gracias al atributo "onload"
function saludar() {
document.getElementById("mensaje").textContent = "¡Bienvenido! La página ha sido cargada.";
}

// Este bloque también se ejecuta cuando la ventana se carga, pero usando addEventListener
window.addEventListener("load", function () {
document.getElementById("otroMensaje").textContent = "Este mensaje vino con addEventListener.";
});