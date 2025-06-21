
    // Funciones para el primer campo (manejo en HTML)
    function mostrarMensaje1() {
      document.getElementById("mensaje1").textContent = "Campo enfocado (onfocus)";
    }

    function ocultarMensaje1() {
      document.getElementById("mensaje1").textContent = "Campo perdió el foco (onblur)";
    }

    // Segundo campo - usando addEventListener
    const campo2 = document.getElementById("campo2");
    const mensaje2 = document.getElementById("mensaje2");

    // Cuando recibe el foco
    campo2.addEventListener("focus", () => {
      mensaje2.textContent = "Campo enfocado (addEventListener)";
    });

    // Cuando pierde el foco
    campo2.addEventListener("blur", () => {
      mensaje2.textContent = "Campo perdió el foco (addEventListener)";
    });