const resultadoRaio = document.querySelector('raio');
const resultadoArea = document.querySelector('area');

let area = 0; 
const PI = 3.14159;

const raio = 10;

area = PI * raio * raio;

resultadoArea.textContent = area;
resultadoRaio.textContent = raio;

raio = 20;

area = PI * raio * raio;

resultadoArea.textContent = area;
resultadoRaio.textContent = raio;
