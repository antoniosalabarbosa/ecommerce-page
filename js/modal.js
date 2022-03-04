const produtos_areas = document.querySelectorAll(".js-produto");
const modal = document.querySelector("#modal-container");
const close_modal = document.querySelector(".close");
const imgs_produtos = document.querySelectorAll("img.img-produto");

let value_de = document.getElementById("valor_de");
let valor_por = document.getElementById("valor_por");
const preco_antes = document.querySelectorAll(".preco-antes");
const preco_atual = document.querySelectorAll(".preco-atual");

const titulo_modal = document.getElementById("js_titulo_modal");
const nome_produto = document.querySelectorAll(".js-txt-produto");

function modalSH(num){
    // Exibe o Modal/popUp removendo a classe CSS (display: none)
    modal.classList.remove("md-cont-int");

    // Modifica o SRC da imagem do Modal/popUp para o src da imagem do produto clicado
    imgs_produtos.forEach(()=>{
        let img_cx = document.getElementById('caixa-img');
        img_cx.innerHTML = `<img src="${imgs_produtos[num].src}" class="js-modal-img">`;
    });

    // Modifica o texto do Modal/popUp para as informações de proços do produto clicado
    value_de.innerHTML = `De: R$ ${preco_antes[num].textContent}`;
    valor_por.innerHTML = `Por: <strong>R$ ${preco_atual[num].textContent}</strong>`;

    // Modifica o título do Modal/popUp para o nome do produto
    titulo_modal.innerHTML = nome_produto[num].textContent;
};

// Clicando na área do produto a função que abre o Modal/popUp é ativada
produtos_areas.forEach((prod,q)=>{
    prod.addEventListener('click',()=>{ modalSH(q); });
});

// Clicando no "X" o Modal/popUp é fechado
close_modal.addEventListener("click",()=>{ modal.classList.add("md-cont-int"); });