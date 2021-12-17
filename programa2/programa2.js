function desenhaQuadrado(x, y, color) {
    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');

    pincel.fillStyle = color;
    pincel.fillRect(x, y, 50, 50);
    //contorno
    pincel.fillStroke = 'black';
    pincel.strokeRect(x, y, 50, 50);
}

//first line
for(var x = 0; x<=600; x += 50){
    desenhaQuadrado(x, 0, 'pink');
}

//other lines
var x = 0;
while(x <= 600){

    desenhaQuadrado(x, 50, 'green')
    desenhaQuadrado(x, 100, 'blue');
    desenhaQuadrado(x, 150, 'yellow');
    desenhaQuadrado(x, 200, 'red');
    x += 50;

}
