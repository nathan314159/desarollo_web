// Ejecuta cuando la página ha cargado
window.addEventListener("load", () => {
    const mensaje = document.getElementById("mensaje");
    const numeros = document.querySelectorAll(".num");

    // Elegir número aleatorio entre 1 y 9
    const numeroGanador = Math.floor(Math.random() * 9) + 1;
    let juegoTerminado = false;

    // Para cada celda numérica, se agrega un evento de clic
    numeros.forEach((cuadrado) => {
        cuadrado.addEventListener("click", () => {
            if (juegoTerminado) return; // Evita seguir jugando después de ganar
            // se convierte en numero
            const valor = parseInt(cuadrado.textContent);
            // si el valor es igual a numeroGanador: se convierte en verde y se detiene el juego con un mensaje diciendo que gano
            if (valor === numeroGanador) {
                cuadrado.style.background = "lightgreen";
                cuadrado.classList.add("ganador-gira"); // Aquí aplicamos la animación
                mensaje.textContent = `¡Correcto! El número ganador es ${valor} 🎉`;
                juegoTerminado = true;
            } else {
                // un mensaje diciendo que no es el numemor ganador y cambia a color rojizo.
                cuadrado.style.background = "lightcoral";
                mensaje.textContent = `Ups... ${valor} no es el número ganador 😢`;
            }
        });
    });
});