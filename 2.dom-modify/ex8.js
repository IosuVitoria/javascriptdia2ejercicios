/*Basandote en el siguiente html,inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.

```html*/

const newText = document.createElement("p");
newText.textContent = "Voy en medio!";

const secondDiv = document.getElementsByTagName("div")[1];

document.body.insertBefore(newText, secondDiv);