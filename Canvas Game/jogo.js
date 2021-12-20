let tela = document.querySelector('canvas');
let personagem = tela.getContext('2d');

let cima = 38; baixo = 40; esquerda = 37; direita = 39;
let posicao = {x : 10, y : 10};

personagem.fillStyle = 'purple';
personagem.fillRect(posicao.x, posicao.y, 50, 50);


window.addEventListener("keydown", mover);

function mover(tecla){
    let pressionado = tecla.keyCode; 

    if(pressionado == cima){
        posicao.y -= 5;
    }if(pressionado == baixo){
        posicao.y += 5;
    }if(pressionado == esquerda){
        posicao.x -= 5;
    }if(pressionado == direita){
        posicao.x += 5;
    }
    renderizar();

}

function renderizar(){
    personagem.clearRect(0, 0, tela.width, tela.height);
    personagem.fillRect(posicao.x, posicao.y, 50, 50);
}