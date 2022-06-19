const nodeList = document.querySelectorAll('div');

const nodeListArray = [...nodeList] //tenemos que pasarlo a un array porque es un tipo NodeList

console.log(nodeList);
console.log(nodeListArray);

const elementoClase = document.querySelectorAll('div.esto-es-una-clase-equisde'); //podemos buscar por elemento y las clases que contenga, podemos concatenar si tiene mas clases separando las clases por puntos (elemento.clase.clase2)
console.log(elementoClase); 

