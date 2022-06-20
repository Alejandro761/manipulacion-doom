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

