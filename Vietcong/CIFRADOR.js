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




// Obtiene el selector para saber si se va a cifrar (opción 1) o descifrar (opción 2)
const accion = document.getElementById("accion");

// Obtiene la caja de texto donde el usuario escribe el mensaje o el código
const entrada = document.getElementById("entrada");

// Obtiene el párrafo donde se mostrará el texto tal y como lo ingresó el usuario
const parrafoOriginal = document.getElementById("textoOriginal");

// Obtiene el párrafo donde se mostrará el resultado del proceso químico/matemático de conversión
const parrafoResultado = document.getElementById("textoResultado");




// Función encargada de encriptar el texto normal
function cifrar(textoOriginal) {
  const resultadoCifrado = textoOriginal
    .toLowerCase() // Convierte todo a minúsculas para evitar errores con el diccionario
    .split('')     // Separa el texto letra por letra para transformarlo en una lista (array)
    // Recorre cada letra y busca su código en el diccionario. Si no existe, pone un signo '?'
    .map(caracter => diccionarioCifrado[caracter] || '?') 
    .join(' ');    // Une todos los códigos obtenidos separándolos con un espacio en blanco

  console.log("Cifrado:", resultadoCifrado); // Muestra el resultado en la consola del navegador
  
  // Imprime los resultados directamente en las etiquetas del HTML
  parrafoOriginal.textContent = "Texto original: " + textoOriginal;
  parrafoResultado.textContent = "Texto cifrado: " + resultadoCifrado;
}

// Función encargada de desencriptar los códigos espaciados
function descifrar(textoCodigo) {
  const resultadoDescifrado = textoCodigo
    .toLowerCase() // Asegura que los códigos estén en minúsculas
    .trim()        // Borra los espacios vacíos que puedan quedar al inicio o al final por error del usuario
    .split(/\s+/)  // Rompe el texto cada vez que encuentra uno o más espacios, separando los códigos individuales
    // Busca cada código en el diccionario inverso. Si no existe, pone un signo '?'
    .map(celda => diccionarioDescifrado[celda] || '?') 
    .join('');     // Junta todas las letras recuperadas en una sola cadena de texto compacta

  console.log("Descifrado:", resultadoDescifrado); // Muestra el resultado en la consola del navegador
  
  // Imprime los resultados directamente en las etiquetas del HTML
  parrafoOriginal.textContent = "Código ingresado: " + textoCodigo;
  parrafoResultado.textContent = "Texto descifrado: " + resultadoDescifrado;
}




// Función que valida el formulario y decide qué proceso ejecutar
function ejecutar() {
  const texto = entrada.value; // Captura el texto real escrito por el usuario

  // Validación: Si el usuario no escribió nada, frena el programa y muestra una advertencia
  if (texto === "") {
    parrafoOriginal.textContent = "Escribe algo primero.";
    parrafoResultado.textContent = "Aquí aparecerá el resultado.";
    return; // Corta la ejecución de la función inmediatamente
  }

  // Si el selector tiene valor "1", llama a la función de cifrado
  if (accion.value === "1") {
    cifrar(texto);
  } 
  // Si el selector tiene valor "2", llama a la función de descifrado
  else if (accion.value === "2") {
    descifrar(texto);
  }
}




// Escucha cuando el usuario hace clic en el botón de ejecutar
document.getElementById("btnEjecutar").addEventListener("click", ejecutar);

// Escucha cuando el usuario presiona una tecla dentro de la caja de entrada de texto
entrada.addEventListener("keydown", function (e) {
  // Si la tecla presionada es "Enter", dispara automáticamente la función ejecutar
  if (e.key === "Enter") ejecutar();
});
