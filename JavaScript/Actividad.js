// Crear una variable con un número. Usar if, else if y else para:
// Si es menor que 0, mostrar "Negativo".
// Si es igual a 0, mostrar "Cero".
// Si es mayor que 0, mostrar "Positivo".

function condicional(num) {
  if (num === 0) {
    console.log("Cero");
  } else if (num <= 0) {
    console.log("Negativo");
  } else {
    console.log("Positivo");
  }
}
console.log(condicional(0));

// 1- Usar un for para recorrer los números del 1 al 10.
// Sumar solamente los números pares (2, 4, 6, 8, 10).
// Mostrar la suma final.
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(num.length);
let suma = 0;
for (let i = 0; i < num.length; i++) {
  // console.log(i, "posicion");
  if (num[i] % 2 === 0) {
    console.log((suma += num[i]));
  }
}
// console.log(`la suma total da ${suma}`);
// Usar un for para recorrer los números del 1 al 20.
// Sumar los números que sean múltiplos de 3.
// Pero si el número también es múltiplo de 5, no lo sumes.
// Mostrar la suma final.
let nume = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

let sume = 0;

for (let a = 0; a <= nume.length; a++) {
  if (a % 3 === 0 && a % 5 !== 0) {
    console.log((sume += a));
  }
}
console.log("la suma total da:", sume);
