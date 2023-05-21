//Inserta dinamicamente en un html un div que contenga una p con javascript.

//Crear elementos.

function createP$$(){
    
    const div$$ = document.createElement("div");
    const p$$ = document.createElement("p");

    //Insertar el elemento en la parte de la web que deseo.
    div$$.appendChild(p$$);
    p$$.textContent="Este es un div insertado dinámicamente con una función."

    document.body.appendChild(div$$);

    //.appendChild("p$$");
    
}


createP$$();




