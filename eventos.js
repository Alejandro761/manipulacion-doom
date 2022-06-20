const p = document.querySelector('div p');

const accion = () => console.log('accion 1');
const accion2 = () => console.log('accion 2');

p.addEventListener('click', accion);
p.addEventListener('click', accion2);
p.removeEventListener('click', accion);

p.addEventListener('click', (evento) => {
    console.log('click wtf');
    console.log(evento);
});

const action = (evento) => {
    console.log(`hola desde: ${evento.currentTarget.nodeName}`);
}

document.body.addEventListener('click', action);

const parrafo = document.querySelector('div h2 p');
parrafo.addEventListener('click', (evento) => {
    evento.stopPropagation(); //para que no ejecute los eventos de sus padres
    console.log('soy un parrafo rebelde');
});
