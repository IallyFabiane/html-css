const elementos = [
    { tag: 'p', texto: '"O futuro'},
    { tag: 'div', texto: 'pertence a quem'},
    { tag: 'footer', texto: 'vê beleza'},
    { tag: 'section', texto: 'nos seus sonhos."'}
];

const container = document.querySelector('.container');
const div = document.createElement('div');
for(let i =0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    let elemento = document.createElement(tag);
    elemento.innerText = texto;
    div.appendChild(elemento);
}

function clique() {
    container.appendChild(div);
}