// manipulacion del DOM
// Nos permite interactuar con un documento, modificar su estructura
// estilo y contenido

// Seleccionar elementos del DOM
// por ID
// obteniendo por id la etiqueta titulo
// nos permite acceder a todas sus propiedades
let titulo = document.getElementById('titulo');

console.log(titulo);
console.log(titulo.textContent, titulo.innerText);
console.log('Hola Mundo!');

titulo.textContent = "Este es el nuevo titulo"

// eventos(addEVemetListener, onClick, onChange)

let boton = document.getElementById('boton')

boton.addEventListener('click', function(){
    alert('tu IP es: 192.168.10.3')
})
