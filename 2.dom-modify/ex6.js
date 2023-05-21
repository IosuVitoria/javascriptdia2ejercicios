/*Basandote en el siguiente array crea una lista ul > li con los textos del array y metelo en el html.*/

/*Primero creo la lista y la meto.*/
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const list$$ = document.createElement('ul');

document.body.appendChild(list$$);

//Aprovecho el mismo index para determinar el número de iteraciones y la cantidad de lineas que creo. 

for(let index = 0; index <= (apps.length-1); index++){
    const li$$ = document.createElement('li');
    li$$.textContent = apps[index]; 
    list$$.appendChild(li$$);
}