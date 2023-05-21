/*# Español
Basandote en el ejercicio anterior. Crea un botón para cada uno de los elementos de las listas que elimine ese mismo elemento del html.*/


const countries = [{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}];


for(let index = 1; index<countries.length; index++){
    let title = countries[index].title;
    let imgUrl = countries[index].imgUrl;

    const div$$ = document.createElement('div');
    const h4$$ = document.createElement('h4');
    const img$$ = document.createElement('img');

    h4$$.textContent = title;
    img$$.src = imgUrl;

    document.body.appendChild(div$$);
    div$$.appendChild(img$$);
    div$$.appendChild(h4$$);
}
    


const allDiv$$ = document.querySelectorAll('div');
const long = allDiv$$.length;

for (let index = 0; index < long; index++) {
    const button$$ = document.createElement('button');
    button$$.textContent = "Eliminar la imagen";

    button$$.addEventListener('click', function () {
    const parentDiv$$ = button$$.parentNode;
    parentDiv$$.remove();
  });

  allDiv$$[index].appendChild(button$$);
}