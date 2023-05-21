//Dado el siguiente array de objetos. Crea dinamicamente en el html una lista de div que contenga un elemento h4 para el titulo y otro elemento img para la imagen. 


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
    
   