// Selección de elementos del DOM
const valID1 = document.getElementById("val1");
const valID2 = document.getElementById("val2");
const selectID = document.getElementById("select");
const resID = document.getElementById("res");

// Evento cuando la caja de resultado recibe el foco (focus)
resID.addEventListener('focus', () => {
    // Convertimos los valores ingresados a números
    const num1 = parseFloat(valID1.value);
    const num2 = parseFloat(valID2.value);
    const operacion = selectID.value;

    // Validamos que los valores ingresados sean números
    if (isNaN(num1) || isNaN(num2)) {
        resID.textContent = "❌ Ingresa dos números válidos";
        return;
    }

    // Declaramos la variable resultado
    let resultado;

    // Evaluamos qué operación fue seleccionada
    switch (operacion) {
        case "suma":
            resultado = num1 + num2; // Se suma y sale.
            break;
        case "resta":
            resultado = num1 - num2; // Se resta y sale.
            break;
        case "multiplicacion":
            resultado = num1 * num2; // Se multiplica y sale.
            break;
        case "division": 
            // Validamos que no se divida entre 0
            if (num2 === 0) {
                resID.textContent = "⚠️ No se puede dividir por 0";
                return;
            }
            resultado = num1 / num2; // Se divide y sale.
            break;
        default:
            resID.textContent = "⚠️ Selecciona una operación";
            return;
    }

    // Mostramos el resultado en pantalla
    resID.textContent = `Resultado: ${resultado}`;

    // Si es par y positivo: fondo blanco y letra negra
    if (resultado >= 0 && resultado % 2 === 0) {
        resID.style.backgroundColor = "white";
        resID.style.color = "black";
    } else {
        // Si es impar o negativo: fondo rojo y letra blanca
        resID.style.backgroundColor = "red";
        resID.style.color = "white";
    }
});