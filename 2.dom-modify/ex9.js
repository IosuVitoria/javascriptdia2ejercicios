/*Basandote en el siguiente html y javascript,inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
   <div class="fn-insert-here"></div>
   <div></div>
   <div class="fn-insert-here"></div>
   <div>Aqui no va un p</div>
</body>
</html>```*/

const modify$$ = document.getElementsByClassName('fn-insert-here');
//Esto genera un array.
const p$$ = document.createElement('p');

p$$.textContent = "Voy dentro";

for(let index = 0; index <= modify$$.length; index++){
    modify$$[index].appendChild(p$$);
}

//Preguntar:sólo se me mete en el primero.