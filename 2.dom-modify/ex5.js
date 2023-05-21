/*Basandote en el siguiente html, inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
   <h2 class="fn-insert-here"></h2> 
</body>
</html>
```*/

const h2$$ = document.body.querySelectorAll('h2');

const firstH2 = h2$$[0];

firstH2.className = 'fn-insert-here';

const modifier = document.getElementById("content").value;
firstH2.innerHTML = modifier

//firstH2.textContent = 'Wubba Lubba dub dub';

