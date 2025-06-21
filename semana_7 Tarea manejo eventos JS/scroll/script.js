    // Contadores para llevar registro del número de veces que se detecta scroll
    let contadorHTML = 0;
    let contadorJS = 0;

    // Función llamada desde el atributo onscroll del body
    function scrollHTML() {
      contadorHTML++;
      document.getElementById("resultado1").textContent = 
        "Scroll (HTML onscroll): " + contadorHTML;
    }

    // Evento usando addEventListener aplicado al objeto window
    window.addEventListener("scroll", () => {
      contadorJS++;
      document.getElementById("resultado2").textContent = 
        "Scroll (JS addEventListener): " + contadorJS;
    });