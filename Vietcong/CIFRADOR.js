const diccionarioCifrado = {
    'a': 'p69', 'b': 'q69', 'c': 'r69', 'd': 's69', 'e': 't69',
    'f': 'p70', 'g': 'q70', 'h': 'r70', 'i': 's70', 'j': 't70',
    'k': 'p71', 'l': 'q71', 'm': 'r71', 'n': 's71', 'o': 't71',
    'p': 'p72', 'q': 'q72', 'r': 'r72', 's': 's72', 't': 't72',
    'u': 'p73', 'v': 'q73', 'w': 'r73', 'x': 's73', 'y': 't73',
    'z': 'p74', '0': 'q74', '1': 'r74', '2': 's74', '3': 't74',
    '4': 'p75', '5': 'q75', '6': 'r75', '7': 's75', '8': 't75',
    '9': 'p76', '!': 'q76', '"': 'r76', '/': 's76', '$': 't76',
    '%': 'p77', '&': 'q77', '(': 'r77', ')': 's77', '=': 't77',
    ' ': 'p78'
};

const diccionarioDescifrado = {
    'p69': 'a', 'q69': 'b', 'r69': 'c', 's69': 'd', 't69': 'e',
    'p70': 'f', 'q70': 'g', 'r70': 'h', 's70': 'i', 't70': 'j',
    'p71': 'k', 'q71': 'l', 'r71': 'm', 's71': 'n', 't71': 'o',
    'p72': 'p', 'q72': 'q', 'r72': 'r', 's72': 's', 't72': 't',
    'p73': 'u', 'q73': 'v', 'r73': 'w', 's73': 'x', 't73': 'y',
    'p74': 'z', 'q74': '0', 'r74': '1', 's74': '2', 't74': '3',
    'p75': '4', 'q75': '5', 'r75': '6', 's75': '7', 't75': '8',
    'p76': '9', 'q76': '!', 'r76': '"', 's76': '/', 't76': '$',
    'p77': '%', 'q77': '&', 'r77': '(', 's77': ')', 't77': '=',
    'p78': ' '
};

const accion = document.getElementById("accion");
const entrada = document.getElementById("entrada");
const parrafoOriginal = document.getElementById("textoOriginal");
const parrafoResultado = document.getElementById("textoResultado");

function cifrar(textoOriginal) {
    const resultadoCifrado = textoOriginal
        .toLowerCase()
        .split('')
        .map(caracter => diccionarioCifrado[caracter] || '?')
        .join(' ');

    console.log("Cifrado:", resultadoCifrado);

    parrafoOriginal.textContent = "Texto original: " + textoOriginal;
    parrafoResultado.textContent = "Texto cifrado: " + resultadoCifrado;
}

function descifrar(textoCodigo) {
    const resultadoDescifrado = textoCodigo
        .toLowerCase()
        .trim()
        .split(/\s+/)
        .map(celda => diccionarioDescifrado[celda] || '?')
        .join('');

    console.log("Descifrado:", resultadoDescifrado);

    parrafoOriginal.textContent = "Código ingresado: " + textoCodigo;
    parrafoResultado.textContent = "Texto descifrado: " + resultadoDescifrado;
}

function ejecutar() {
    const texto = entrada.value;

    if (texto === "") {
        parrafoOriginal.textContent = "Escribe algo primero.";
        parrafoResultado.textContent = "Aquí aparecerá el resultado.";
        return;
    }

    if (accion.value === "1") {
        cifrar(texto);
    } else if (accion.value === "2") {
        descifrar(texto);
    }
}

document.getElementById("btnEjecutar").addEventListener("click", ejecutar);

entrada.addEventListener("keydown", function (e) {
    if (e.key === "Enter") ejecutar();
});