(function reemplazarPalabra() {
    let frase = prompt("ingresa una frase:");
    let palabraAReemplazar = prompt("ingresa la palabra que deseas  reemplazar?");
    let nuevaPalabra = prompt("Por que palabra quieres reemplazarla?");
    
    let nuevaFrase = frase.replace(new RegExp(palabraAReemplazar, 'gi'), nuevaPalabra);
    
    alert("La nueva frase es: " + nuevaFrase);
})();
