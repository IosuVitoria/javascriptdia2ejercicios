//Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
//evento click que ejecute un console log con la información del evento del click

const buton$$ =  document.body.createElement('button');
buton$$.id = 'btnToClick';
body.appendChild(buton$$);

function tarea(evento){
    console.log('Información del evento:', evento);
}

buton$$.addEventListener('click', tarea(evento));