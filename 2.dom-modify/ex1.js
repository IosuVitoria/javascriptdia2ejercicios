//Inserta dinamicamente en un html un div vacio con javascript.

const div$$ = document.createElement('div');

//Insertar el elemento en la parte de la web que deseo.

document.body.appendChild(div$$);

div$$.textContent = "Esto es una prueba porque me mosquea un div vacío.";