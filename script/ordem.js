const produtos_cont = document.getElementById("produtos-cont");
const orde_buttons = document.querySelectorAll(".btn-ord");
orde_buttons.forEach((e,q,i)=>{
    e.addEventListener("click",()=>{
        i[0].classList.remove("js-ordem-at");
        i[1].classList.remove("js-ordem-at");
        i[q].classList.add("js-ordem-at");
    });
});

const produtos_original = document.querySelectorAll("div.produto.js-produto");
const names_prod_original = document.querySelectorAll("span.txt-produto.js-txt-produto");
const precos_prod_original = document.querySelectorAll("span.preco-atual.js_preco_atual");

function ordenarAZ(){
    let produtos_areas = Array.from(produtos_original);
    let names_produtos = Array.from(names_prod_original);

    let conte_names_produtos = [];
    names_produtos.forEach((e,q,a)=>{
        conte_names_produtos[q] = names_produtos[q].textContent;
    });

    let conte_names_produtos_Az = conte_names_produtos.sort();
    
    let names_produtos_Az = [];
    names_produtos.forEach((e,q,a)=>{
        for (let i = 0; i < names_produtos.length; i++) {
            
            if(e.textContent === conte_names_produtos_Az[i]){
                names_produtos_Az[i] = e;
            }
        };
    });

    let produtos_Az = [];
    produtos_areas.forEach((e,q,a)=>{
        
        for (let index = 0; index < produtos_areas.length; index++) {
            
            if(e.children[1] === names_produtos_Az[index]){
                produtos_Az[index] = e;
            }
        }
    });

    for (let c = 0; c < produtos_areas.length; c++) {
        produtos_cont.insertBefore(produtos_Az[c],produtos_Az[produtos_Az.length-1]);
    }
}

function ordenarZA(){
    let produtos_areas = Array.from(produtos_original);
    let names_produtos = Array.from(names_prod_original);

    let conte_names_produtos = [];
    names_produtos.forEach((e,q,a)=>{
        conte_names_produtos[q] = names_produtos[q].textContent;
    });

    let conte_names_produtos_Za = conte_names_produtos.sort().reverse(); // ordem alfabética
    
    let names_produtos_Za = []; // spans organizados de acordo com o conteúdo 
    names_produtos.forEach((e,q,a)=>{
        for (let i = 0; i < names_produtos.length; i++) {
            
            if(e.textContent === conte_names_produtos_Za[i]){
                names_produtos_Za[i] = e;
            }
        };
    });

    let produtos_Za = [];
    produtos_areas.forEach((e,q,a)=>{
        
        for (let index = 0; index < produtos_areas.length; index++) {
            
            if(e.children[1] === names_produtos_Za[index]){
                produtos_Za[index] = e;
            }
        }
    });

    for (let c = 0; c < produtos_areas.length; c++) {
        produtos_cont.insertBefore(produtos_Za[c],produtos_Za[produtos_Za.length-1]);
    }
};

orde_buttons[0].addEventListener("click",()=>{
    ordenarAZ();
});

orde_buttons[1].addEventListener("click",()=>{
    ordenarZA();
});

// categoria

const categoria = document.querySelectorAll("div.campo-cat-marc");
categoria.forEach((e)=>{
    e.addEventListener("click",()=>{
        categoria[0].classList.remove("js_categoria_ativa");
        categoria[1].classList.remove("js_categoria_ativa");
        categoria[2].classList.remove("js_categoria_ativa");
        e.classList.add("js_categoria_ativa");
    });
});
categoria[0].addEventListener("click",()=>{
    let all_produtos = document.querySelectorAll("div.produto.js-produto");
    all_produtos.forEach((e,q)=>{
        e.classList.remove("js_type_camisa","js_type_moletom","js_type_inativo");
    });
});

categoria[1].addEventListener("click",()=>{
    let all_produtos = document.querySelectorAll("div.produto.js-produto");
    let all_names_produtos = document.querySelectorAll("span.txt-produto.js-txt-produto");

    all_names_produtos.forEach((e,q)=>{
        all_produtos[q].classList.remove("js_type_inativo","js_type_camisa","js_type_moletom");
        if(all_names_produtos[q].textContent.startsWith("Camiseta")){
            all_produtos[q].classList.add("js_type_camisa");
        }else{
            all_produtos[q].classList.add("js_type_inativo");
        };
    });
});

categoria[2].addEventListener("click",()=>{
    let all_produtos = document.querySelectorAll("div.produto.js-produto");
    let all_names_produtos = document.querySelectorAll("span.txt-produto.js-txt-produto");

    all_names_produtos.forEach((e,q)=>{
        all_produtos[q].classList.remove("js_type_inativo","js_type_camisa","js_type_moletom");
        if(all_names_produtos[q].textContent.startsWith("Moletom")){
            all_produtos[q].classList.add("js_type_moletom");
        }else{
            all_produtos[q].classList.add("js_type_inativo");
        };
    });
});