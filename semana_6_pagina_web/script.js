// Función para mostrar u ocultar el bloque de ejemplo CSS
function mostrarEjemplo() {
    // Se obtiene el elemento con el ID "ejemplo-css", que es una etiqueta <pre> que contiene el código de ejemplo
    const ejemplo = document.getElementById("ejemplo-css");

    // Alterna el valor de la propiedad display:
    // Si actualmente está oculto (display === "none"), se cambia a "block" para mostrarlo. (es como un if)
    // En caso contrario (ya visible), se cambia a "none" para ocultarlo.
    ejemplo.style.display = (ejemplo.style.display === "none") ? "block" : "none";
}

// Función simulada de inicio de sesión
function login() {
    // Muestra una alerta indicando que la función aún no está implementada
    alert("Función de inicio de sesión aún no implementada.");
}
