const notas = []; // se crea un arreglo en vacio
const notaInput = document.getElementById("nota"); // invocamos al id nota y lo guardamos en una variable notaInput
const listaNotas = document.getElementById("listaNotas"); // invocamos al id listaNotas y lo guardamos en una variable listaNotas
const resSpan = document.getElementById("resultado"); // invocamos al id resultado y lo guardamos en una variable resSpan
const agregarBtn = document.getElementById("agregar"); // invocamos al id agregar y lo guardamos en una variable agregarBtn
const calculaBtn = document.getElementById("calcular"); // invocamos al id calcular y lo guardamos en una variable calculaBtn


agregarBtn.addEventListener("click", () => {
    const valor = parseFloat(notaInput.value);
    // Convertimos el valor ingresado (texto) a número decimal

    if (!isNaN(valor) && valor >= 0) {
        // Verificamos que el valor sea un número válido y que no sea negativo

        notas.push(valor);
        // Agregamos la nota al arreglo de notas

        const item = document.createElement("p");
        // Creamos un nuevo elemento <p> para mostrar la nota

        item.textContent = `Nota: ${valor.toFixed(2)}`;
        // Asignamos el texto con la nota formateada a 2 decimales

        listaNotas.appendChild(item);
        // Agregamos ese <p> al contenedor de notas en la página

        notaInput.value = "";
        // Limpiamos el campo de entrada para que el usuario escriba otra nota
    }
});


calculaBtn.addEventListener("click", () => {
    if (notas.length === 0) {
        // Si no hay notas, mostramos 0.00 como promedio
        resSpan.textContent = "0.00";
        return; // Salimos de la función
    }

    let suma = 0;
    // Creamos una variable llamada "suma" y le damos el valor inicial de 0.
    // Aquí vamos a ir guardando la suma total de las notas.

    for (let i = 0; i < notas.length; i++) {
        // Usamos un bucle "for" para recorrer el arreglo "notas".
        // "i" es el índice (la posición) que empieza en 0 y va aumentando hasta que recorra todas las notas.

        suma += notas[i];
        // En cada vuelta del bucle, sumamos la nota que está en la posición "i" al total "suma".
        // Es lo mismo que escribir: suma = suma + notas[i]
    }

    const promedio = suma / notas.length;
    // Dividimos la suma total por la cantidad de notas para obtener el promedio

    resSpan.textContent = promedio.toFixed(2);
    // Mostramos el promedio en pantalla, con 2 decimales
});

