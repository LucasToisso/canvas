var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

//background
pincel.fillStyle = 'lightgrey';
pincel.fillRect(0, 0, 600, 400);

function desenhaCirculo(x, y, raio, cor){

    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2*3.14);
    pincel.fill();

}

function desenhaFlor(x, y){
    desenhaCirculo(x, y, 10, 'red');
    desenhaCirculo(x+20, y, 10, 'black');
    desenhaCirculo(x-20, y, 10, 'orange');
    desenhaCirculo(x, y-20, 10, 'yellow');
    desenhaCirculo(x, y+20, 10, 'blue');
}

//flower
desenhaFlor(300, 200);
desenhaFlor(400, 200);
desenhaFlor(200, 200);
desenhaFlor(300, 100);
desenhaFlor(300, 300);