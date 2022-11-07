const ps = document.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body); //pegando os estilos detectados no navegador
const backgroundColorBody = estilosBody.backgroundColor; //capturando o valor da propriedade background-color

for (let p of ps) { // iterando sobre a nodelist
    console.log(p);
    p.style.color = backgroundColorBody; // aplicando a cor do background do body a cor da letra do p
}