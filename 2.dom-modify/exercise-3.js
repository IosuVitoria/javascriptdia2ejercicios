const div$$ = document.createElement('div');


for (let index = 0; index < pokemon.length; index++) {
    p$$.textContent = pokemon[index];
    div$$.appendChild(p$$);
}

document.body.appendChild(div$$);
