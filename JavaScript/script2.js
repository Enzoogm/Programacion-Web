// array lista de python
const arreglo = [1,2,3];

// objetos como un diccionario python
// compuesto por clave y valor

const objeto = {
    name: "thomas",
    age: 17,
};
console.log(arreglo[0]);

console.log(objeto.age);

// metodo de arreglos
// lengh --> longitud del arreglo

const longitud = arreglo.length;
console.log(longitud);

// push(valor) --> agrega un elemento al final
// equivalente al .append del python

arreglo.push(5)
console.log(arreglo);


// pop() elimina el ultimo elemento de un arreglo
// si queremos lo podemos guardar en una variable
const ultimo = arreglo.pop()
console.log(arreglo);
console.log("ultimo", ultimo);

// shift() elimina el primero valor del arreglo
// tambien lo guarda
const primero = arreglo.shift();
console.log(arreglo);
console.log(primero);

// unshift(valor) agrega un elemento al principio del arreglo
arreglo.unshift("Pepe");
console.log(arreglo);

// metodo forEach
// SOLO RECORRE, no guarda los valores en ningun lado
arreglo.forEach( (item, index, arregloEntero) => {
  console.log('Elemento', item,
    'posicion', index,
    'lista entera', arregloEntero /* esto muestra en que posicion esta cada elemento*/ );
  
} );

// map recorre el arreglo, lo modifica con una funcion
// y nos devuelve uno nuevo
const nuevoArreglo = arreglo.map((item, index) => {
    const num = 2;
    console.log(index, 'item', item);
    return item += num;
})
console.log('nuevo arreglo', nuevoArreglo);

// filter crea un nuevo array a partir de los elementos que
// cumplan las condiciones

const arregloNum = [2,4,5,6] 
const pares = arregloNum.filter((item) => item % 2 === 0)
console.log(pares);
