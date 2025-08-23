// Tenés un array vacío llamado inventario.
//  Vas a:
// Crear 4 productos como objetos (con nombre, precio, categoria) y agregarlos al array con .push().
// Mostrar en consola todos los productos con forEach.
// Filtrar los productos que pertenezcan a la categoría "Electrónica" y mostrarlos.
// Crear un nuevo array con solo los nombres de los productos, y mostrarlo en consola.

const inventario = [];

inventario.push({nombre:'Pala', valor:200, tipo:'Herramienta'},
                {nombre:'Batidora', valor:450, tipo:'Electronico'},
                {nombre:'Cuchara', valor:100, tipo:'Herramienta'},
                {nombre:'Microondas', valor:600, tipo:'Electronico'}
 )
inventario.forEach((item, precio, elemento )=>{
    console.log('producto',item,
                'Precio', precio,
                'tipo', elemento
    );
    
})

const electronicos = inventario.filter((elemento) => elemento.tipo === 'Electronico')
console.log(electronicos);

const nombres = inventario.map( (item) => {
    return item.nombre;
} )
console.log(nombres);


// Tenés un array vacío llamado peliculas.
// Agregá 3 películas al array. Cada película debe tener: título, director, año y género.
// Agregá una película al inicio del array.
// Eliminá la primera película del array y guardala en una variable.
// Mostrá cuántas películas hay actualmente en el array.

const peliculas = []
peliculas.push({peli:'Spider-Man', director:'Sam Raimi', año:2002, genero: 'ciencia ficcion'},
               {peli:'Interestelar', director:'Christopher Nolan', año:2014, genero: 'ciencia ficcion'},
               {peli:'El conjuro', director:'James Wan', año:2013, genero: 'terror'}              
)
console.log(peliculas);
peliculas.unshift({peli:'Scooby-do', director:'Joseph Barbera', año:1969,genero:'Ciencia ficcion'})
console.log(peliculas);
const primero=peliculas.shift();
console.log('primer',primero);
console.log(peliculas);
const longitud = peliculas.length;
console.log('Largo de la lista actual',longitud);


