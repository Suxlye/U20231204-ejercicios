(function() {
    let palabra = prompt("Ingresa una palabra:");
    let contadorVocales = 0;
    let vocales = "aeiouAEIOU";

    for (let i = 0; i < palabra.length; i++) {
        if (vocales.includes(palabra[i])) {
            contadorVocales++;
        }
    }

    alert("La palabra tiene " + contadorVocales + " vocales.");
})();
