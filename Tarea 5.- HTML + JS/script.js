const textInput = document.getElementById("text");
const button = document.getElementById("button");
const listaDiv = document.getElementById("lista");
const emptyLabel = document.getElementById("emptyLabel");

button.addEventListener("click", () => {
    const texto = textInput.value.trim();

    if (texto === "") {
        alert("¡No hay texto!");
        return;
    }

    const vowels = "aeiouAEIOU";
    let foundVowels = "";

    for (let char of texto) {
        if (vowels.includes(char)) {
            foundVowels += char;
        }
    }

    // Al agregar el primer elemento, ocultamos "Lista Vacío"
    if (emptyLabel) {
        emptyLabel.style.display = "none";
    }

    // Crear nuevo ul con un li dentro
    const newUl = document.createElement("ul");
    const li = document.createElement("li");
    li.textContent = `Palabra: ${texto} | Vocales: ${foundVowels} | Cantidad: ${foundVowels.length}`;
    newUl.appendChild(li);

    listaDiv.appendChild(newUl);

    textInput.value = "";
});