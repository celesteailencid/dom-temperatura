/* 
https://github.com/Ada-IT/ejercicios-frontend/blob/master/modulo-2/ejercicios/17-dom.md

temperatura
Hacer un programa que al iniciarse pregunte mediante un prompt por un temperatura, y con ese dato modifique un h1 en el html, de forma tal que diga, por ejemplo, Temperatura actual: 20°. Cambiar el color del h1 dependiendo de la temperatura ingresada, siguiendo las siguientes reglas:

Temperatura	Color
Menor a 0°	Azul
Mayor o igual a 0° y menor a 15°	Celeste
Mayor o igual a 15° y menor a 25°	Verde
Mayor o igual a 25° y menor a 30°	Amarillo
Mayor o igual a 30° y menor a 35°	Naranja
Mayor a 35°	Rojo */

let temperatura = prompt("¿Qué temperatura hay en este momento?");
let titulo = document.getElementById("titulo");
titulo.textContent = `La temperatura actual es ${temperatura}`;

if (temperatura < 0) {
    titulo.style.color = "blue";
} else if (temperatura >= 0 && temperatura < 15) {
    titulo.style.color = "lightblue";
} else if (temperatura >= 15 && temperatura < 25){
    titulo.style.color = "green";
} else if (temperatura >= 25 && temperatura < 30) {
    titulo.style.color = "yellow";
} else if (temperatura >=30 && temperatura < 35) {
    titulo.style.color = "orange";
} else {
    titulo.style.color = "red";
} 