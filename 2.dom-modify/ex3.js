//Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const div$$ = document.createElement('div');
const pokemon = ["Bulbasaur","Ivysaur","Venasaur","Charmander","Charmeleon","Charizard"];

for(let index = 0; index < 6; index++) {
    const p$$ = document.createElement('p');
    p$$.textContent = pokemon[index];
    console.log(p$$);
    
    div$$.appendChild(p$$);
}

document.body.appendChild(div$$);
