(function() {
    let frase = prompt("Ingresa una frase:");
    let palabras = frase.split(" ");
    let fraseCap = "";

    for (let i = 0; i < palabras.length; i++) {
        let palabra = palabras[i];
        let primeraLetra = palabra[0].toUpperCase();
        let restoPalabra = palabra.substring(1).toLowerCase();
        fraseCap += primeraLetra + restoPalabra + " ";
    }

    alert("Frase capitalizada: " + fraseCap.trim());
})();
