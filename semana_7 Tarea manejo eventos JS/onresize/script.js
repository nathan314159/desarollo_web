    // Variable global para contar las veces que se ha redimensionado
    let resultadoHTML = 0;
    let resultadoJS = 0;

    // Función que se ejecuta con el atributo onresize en el body
    function contar() {
      resultadoHTML++;
      document.getElementById('info').innerHTML =
        `El número de veces que has modificado el tamaño de la pantalla (con <strong>onresize</strong>) es: ${resultadoHTML}`;
    }

    // EventListener sobre el objeto window (correcto)
    window.addEventListener("resize", () => {
      resultadoJS++;
      document.getElementById('info2').innerHTML =
        `El número de veces que has modificado el tamaño de la pantalla (con <strong>addEventListener</strong>) es: ${resultadoJS}`;
    });