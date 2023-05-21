//Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

//Modificación: Insertado en función y insertando el número de p que yo desee.

const num = parseInt(prompt("Introduce el número de p que quieres insertar: "));

function newParagraph(num){
    for(let index = 1; index <= num; index++){
        const newParagraph = document.createElement('p');
        newParagraph.textContent = 'Soy dinámico!';
        document.body.appendChild(newParagraph);
    }
}

newParagraph(num);