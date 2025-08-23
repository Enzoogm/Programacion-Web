// setTimeout

// funcion que recibe por parametros dos valores
// recibe una funcion y el tiempo que tarda en ejecutarse
const boton = document.getElementById("boton");
let contador = 0;
boton.addEventListener("click", () => {
  setTimeout(function () {
    alert("cuidadito");
  }, 2000); //el tiempo es en millis
  //   setInterval(function () {
  //     contador++;
  //     console.log(contador);
  //   }, 1000);
});

// setInterval()
// ejecutar el codigo cada n cantidad de tiempo

// asincronia
// peticion a una api
// metodos: get, post, put, delete

// fetch()
// fetch("https://rickandmortyapi.com/api/character")
//   .then((data) => data.json())
//   .then((response) => console.log("response", response.results[2]));

// async await
// funcion flecha asincrona
const asyncFunction = async () => {
  // try catch
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    const arrayFilt = data.results.filter((objetito) => objetito.id === 1);
    console.log(arrayFilt);

    const nuevoNombre = data.results.map((cambio, index) => {
      if (cambio.name === "Rick Sanchez") {
        const nombre = "Thomas Avila";
        return nombre;
      }
    });
    console.log("nuevoNombre", nuevoNombre);
    console.log("data", data);
  } catch (error) {
    console.log("error", error);
  }
};
asyncFunction(); //para ejecutar una funcion debemos llamarla con Variable();
// // funcion regular asincrona
// async function asyncFunc() {}
