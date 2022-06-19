const nodeList = document.querySelectorAll('div');

const nodeListArray = [...nodeList] //tenemos que pasarlo a un array porque es un tipo NodeList

console.log(nodeList);
console.log(nodeListArray);

const elementoClase = document.querySelectorAll('div.esto-es-una-clase-equisde'); //podemos buscar por elemento y las clases que contenga, podemos concatenar si tiene mas clases separando las clases por puntos (elemento.clase.clase2)
console.log(elementoClase); 

const container = document.querySelector('.container');
const h3 = document.createElement('h3');
container.appendChild(h3); //que agregue como hijo lo que le des como argumento
const texto = document.createTextNode('texto aaaaaaaa, esto es un h3 ');
h3.appendChild(texto);

container.append('hola amigos', document.createElement('div')); //crea dos hijos

const titulo = document.createElement('h2');
const h2Text = document.createTextNode('soy otro h2');
const referencia = document.querySelector('h3');

titulo.appendChild(h2Text);
container.insertBefore(titulo, referencia); // inserta el primer argumento (titulo) antes del segundo (referencia), el segundo argumento debe ser hijo de contenedor

const referencia2 = document.querySelector('h2');
const nodo = document.createElement('span');

referencia2.insertAdjacentElement('afterend', nodo); //nos da un mejor control, hay 4 metodos