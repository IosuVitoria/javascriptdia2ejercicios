// Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la lista.

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
    
const button$$ = document.querySelectorAll('button');
const allDiv$$ = document.querySelectorAll('div');

console.log(allDiv$$);

function removeLastDiv(){
    const allDiv$$ = document.body.querySelectorAll('div');
    allDiv$$[allDiv$$.length - 1].remove();
}

button$$[0].addEventListener('click',removeLastDiv);