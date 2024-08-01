(function() {
    let palabra = prompt("Ingresa una palabra:");
    let palabraInvertida = "";

    for (let i = palabra.length - 1; i >= 0; i--) {
        palabraInvertida += palabra[i];
    }

    if (palabra === palabraInvertida) {
        alert("La palabra es un palíndromo.");
    } else {
        alert("La palabra no es un palíndromo.");
    }
})();
