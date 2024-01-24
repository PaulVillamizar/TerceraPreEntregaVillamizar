document.addEventListener('DOMContentLoaded', function () {
    const calcularBtn = document.getElementById('calcularBtn');
    calcularBtn.addEventListener('click', calcular);

    cargarResultadoAlmacenado();
});

function calcular() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operacion = document.getElementById('operacion').value;

    if (isNaN(num1) || isNaN(num2)) {
        mostrarMensaje("Por favor, ingrese números válidos.");
        return;
    }

    let resultado;

    switch (operacion) {
        case 'sumar':
            resultado = num1 + num2;
            break;
        case 'restar':
            resultado = num1 - num2;
            break;
        case 'multiplicar':
            resultado = num1 * num2;
            break;
        case 'dividir':
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                mostrarMensaje("No se puede dividir por cero.");
                return;
            }
            break;
        default:
            mostrarMensaje("Operación no válida.");
            return;
    }

    mostrarResultado(resultado);
    guardarEnStorage(resultado);
}

function mostrarMensaje(mensaje) {
    const mensajeDiv = document.getElementById('resultado');
    mensajeDiv.innerHTML = `<p>${mensaje}</p>`;
}

function mostrarResultado(resultado) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `<p>Resultado: ${resultado}</p>`;
}

function guardarEnStorage(resultado) {
    const resultadoJSON = JSON.stringify({ resultado: resultado });
    localStorage.setItem('resultadoCalculadora', resultadoJSON);
}

function cargarResultadoAlmacenado() {
    const almacenadoJSON = localStorage.getItem('resultadoCalculadora');

    if (almacenadoJSON) {
        const almacenadoObjeto = JSON.parse(almacenadoJSON);
        const resultadoAlmacenado = almacenadoObjeto.resultado;
        mostrarResultado(resultadoAlmacenado);
    }
}
