var miVariable = "contenido de variable"; //No se usa

//let--> solamente vive en el scope declarado o en sus hijos
let variableLet = "contenido de variable local"; //Puede ser re-escrito sus valores
variableLet = 2; // Reasignacion del valor
//const-> variable constante no son reasignables sus valores
const variableConst = "contenido de variable que no cambia"; //No cambia su valor

const text = "string";
const numeros = 4; //number
const boolean = true; //boolean
//undefined -> valor definido
//null -> vacio

const a = 19;

//operadores

//aritmeticos: son todos los de matematicas + - / % *
//comparacion:
// == doble igual compara el valor del dato
// === triple igual compara el valor y el tipo de dato
// != distinto el valor !== distinto el valor y el tipo
// < > >= <= mayor menor, mayor o igual, menor y igual

//condicionales
//if

if (a === 19) {
  console.log("Sos mayor");
} else {
  console.log("Sos menor");
}

//switch
const dia = 1;
switch (dia) {
  case 1:
    console.log("dia lunes");
    break;
  case 2:
    console.log("dia Martes");
    break;
  default:
    console.log("dia no registrado");
    break;
}

//funciones
//declaracion funcion clasica
function saludar(nombre) {
  return `Hola ${nombre} `;
}
console.log(saludar("Thomy"));

// arrow function
const saludo = (nombre) => {
  return `Hola ${nombre}`; // return implicito => ``hola ${nombre}
};
console.log(saludo);

//si el return implicito tiene mas de una linea a estar
//envuelto en parentesis

//arreglos (Lista en python)

const miArreglo = [1, 2, "pepito", true];

console.log(miArreglo[1]);

const miObjeto = { clave: "Mimamamemima", usuario: "Thomasteagua" };
console.log(miObjeto.usuario);

//iteramos una lista con for

for (let i = 0; i < miArreglo.length; i++) {
  console.log("for", miArreglo[i]); //imprimi en pantalla el arreglo con su posicion
}
