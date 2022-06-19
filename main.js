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

const padre = document.querySelector('.padre-div');
const hijo = document.querySelector('div p')
padre.removeChild(hijo); //elimina ese hijo

const hijo2 = document.querySelector('div h2');
console.log(hijo2.parentElement); //parent element reotrna el padre
//hijo2.parentElement.removeChild(hijo2); //podemos removerlo directamente consolo crear una varibale del hijo y asi no crear otra para el padre
hijo2.remove(); //hace lo de arriba pero mas corto

const nodeH2 = document.createElement('h2');
nodeH2.textContent = 'Antes era un h3, ahora soy h2 :DDD'
h3.parentElement.replaceChild(nodeH2, h3); //reemplaza el segundo argumento por el primero