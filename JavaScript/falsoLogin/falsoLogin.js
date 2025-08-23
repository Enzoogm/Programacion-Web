const user = "tomi";
const pass = 1234;
// const usuario = document.getElementById("usuario").value;
// const contraseña = document.getElementById("contraseña").value;

// console.log(usuario);

let boton = document.getElementById("boton");

boton.addEventListener("click", () => {
  const usuario = document.getElementById("usuario").value;
  const contraseña = document.getElementById("contraseña").value;
  console.log("Hola");

  if (usuario === user && contraseña === pass.toString()) {
    const asyncFunction = async () => {
      // try catch
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        const filtrarEmpleado = data.map((user) => ({
          nombre: user.name,
          email: user.email,
          empresa: user.company.name,
        }));
        // let users = { nombre: "", email: "", empresa: "" };
        // users.push({
        //   nombre: name,
        //   email: email,
        //   empresa: company.name,
        // });
        console.log(filtrarEmpleado);
      } catch (error) {
        console.log("error", error);
      }
    };
    asyncFunction();
    alert("Usuario correcto");
  } else {
    alert("Usuario incorrecto");
  }
});
