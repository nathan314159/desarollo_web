        // Obtenemos el cuadrado que usará 'onclick'
        const cuadradoId = document.getElementById("cuadrado");

        // Función llamada desde el HTML cuando se hace clic (onclick)
        function gira() {
            // Agrega la clase 'girar' que aplica rotación en CSS
            cuadradoId.classList.add("girar");

            // Después de 0.5 segundos (500 milisegundos), se remueve la clase
            // Esto permite que al hacer clic otra vez, se reinicie la animación
            setTimeout(() => {
                cuadradoId.classList.remove("girar");
            }, 500); // debe coincidir con el tiempo del transition en CSS
        }

        // Obtenemos el cuadrado y el contenedor que usarán addEventListener
        const cuadrado2 = document.getElementById("cuadrado2");
        const contenedor2 = document.getElementById("cuadrado-grande2");

        // Escuchamos el evento 'click' usando addEventListener
        contenedor2.addEventListener("click", () => {
            // Al hacer clic sobre el contenedor, se aplica la clase girar al cuadrado
            cuadrado2.classList.add("girar");

            // Luego de 0.5 segundos se quita la clase para que se pueda volver a animar
            setTimeout(() => {
                cuadrado2.classList.remove("girar");
            }, 500);
        });