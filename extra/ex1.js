/*Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.

*/
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const list$$ = document.createElement('ul');

function createList(){
    for(let index = 0; index < countries.length; index++){
        const li$$ = document.createElement('li');
        li$$.textContent = countries[index];
        list$$.appendChild(li$$);
    }
    document.body.appendChild(list$$);
}


createList();