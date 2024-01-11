const input = document.querySelector('#inputText');
const lista = document.querySelector('#lista');
const boton = document.querySelector('#submit');

function m(e) {
    e.preventDefault();
    const valor = input.value;
    const tarea = document.createElement('li');
    tarea.textContent = valor;
    lista.appendChild(tarea);
}

document.addEventListener('submit', m);