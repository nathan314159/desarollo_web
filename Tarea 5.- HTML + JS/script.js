// app vocales
const textInput = document.getElementById("text");
const buttonVocal = document.getElementById("buttonVocal");
const listaDiv = document.getElementById("lista");
const emptyLabel = document.getElementById("emptyLabel");
// llamamos al boton con evento click
buttonVocal.addEventListener("click", () => {
    const texto = textInput.value.trim(); // quitamos espacios
    // si ingresa texto en blanco retorna un alert
    if (texto === "") {
        alert("¡No hay texto!");
        return;
    }

    const vowels = "aeiouAEIOU"; // las vocales estan en una cadena
    let foundVowels = ""; // cuando se encuentra una vocal se almacena en una cadena.

    // se itera la cadena letra por letra y si esta una vocal lo almacena en la variable foundVowels (include retorna verdadero si esta una vocal)
    for (let char of texto) {
        if (vowels.includes(char)) {
            foundVowels += char;
        }
    }

    // al agregar el primer elemento, ocultamos "Lista Vacío"
    if (emptyLabel) {
        emptyLabel.style.display = "none";
    }

    // Crear nuevo ul con un li dentro
    const newUl = document.createElement("ul");
    const li = document.createElement("li");
    li.textContent = `Palabra: ${texto} | Vocales: ${foundVowels} | Cantidad: ${foundVowels.length}`;
    newUl.appendChild(li); // se agrega una lista al ul

    listaDiv.appendChild(newUl); // la ul se agregar al listaDiv

    textInput.value = ""; // el valor se borra para escribir de nuevo.
});

// collatz
const calcularCollats = document.getElementById("calcularCollats");
const botonCollats = document.getElementById("botonCollats");
const mostrar = document.querySelector(".mostrar");

// // llamamos al boton con evento click, el valor the input es almacenado en una variable  valor que de antemano convierte la variable calcularCollats a un valor  y despues a un entero.
botonCollats.addEventListener("click", () => {
    const valor = parseInt(calcularCollats.value); 
    mostrar.textContent = "";
    // el sistema muestra Ingresa un número válido. es por que no as ingresado un numero o el numero es menor a cero.
    if (isNaN(valor) || valor <= 0) { 
        mostrar.textContent = "Ingresa un número válido";
        return;
    }

    let n = valor; // in gresa un valor
    let secuencia = [n]; // se guarda en un array que se llama secuencia.
    // mientras n no sea 1 es verdadero. si es par se divide por 2 y si es impar se multiplica por 3 y se suma uno. hasta que n es 1 y se acaba. seva empujando n a la lista.
    while (n !== 1) {
        if (n % 2 === 0) {
            n = n / 2;
        } else {
            n = (3 * n) + 1;
        }
        secuencia.push(n);
    }

    mostrar.textContent = secuencia.join(" → "); // Puedes cambiar "→" por lo que quieras
});


const notas = []; // se crea un arreglo en vacío
const notaInput = document.getElementById("nota"); // se obtiene el input con id nota
const listaNotas = document.getElementById("listaNotas"); // se obtiene el contenedor de la lista de notas
const resSpan = document.getElementById("resultado"); // se obtiene el span donde se mostrará el resultado
const agregarBtn = document.getElementById("agregar"); // se obtiene el botón para agregar nota
const calculaBtn = document.getElementById("calcular"); // se obtiene el botón para calcular el promedio

agregarBtn.addEventListener("click", () => {
    const valor = parseFloat(notaInput.value);
    // se convierte el valor ingresado (texto) a número decimal

    if (!isNaN(valor) && valor >= 0) {
        // se verifica que el valor sea un número válido y no negativo

        notas.push(valor);
        // se agrega la nota al arreglo de notas

        const item = document.createElement("p");
        // se crea un nuevo elemento <p> para mostrar la nota

        item.textContent = `Nota: ${valor.toFixed(2)}`;
        // se asigna el texto con la nota formateada a 2 decimales

        listaNotas.appendChild(item);
        // se agrega el elemento <p> al contenedor de notas

        notaInput.value = "";
        // se limpia el campo de entrada
    }
});

calculaBtn.addEventListener("click", () => {
    if (notas.length === 0) {
        // si no hay notas, se muestra 0.00 como promedio
        resSpan.textContent = "0.00";
        return; // se sale de la función
    }

    let suma = 0;
    // se crea una variable para almacenar la suma de las notas

    for (let i = 0; i < notas.length; i++) {
        // se recorre el arreglo de notas

        suma += notas[i];
        // se acumula la suma de las notas
    }

    const promedio = suma / notas.length;
    // se calcula el promedio dividiendo la suma entre la cantidad de notas

    listaNotas.innerHTML = "";
    // se borra lo escrito en la sección de notas

    document.querySelector(".promedio").style.display = "block";
    // se muestra el contenedor del promedio

    resSpan.textContent = promedio.toFixed(2);
    // se muestra el promedio con 2 decimales
});
