(function() {
    let cadena = prompt("Por favor, ingresa una cadena:");

    let inicio = parseInt(prompt("Ingresa el índice de inicio de la subcadena:"), 10);

    let fin = parseInt(prompt("Ingresa el índice final de la subcadena:"), 10);

    let subcadena = cadena.substring(inicio, fin);

    alert("La subcadena extraída es: " + subcadena);
})();
