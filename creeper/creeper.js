var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

//background
pincel.fillStyle = 'lightGrey';
pincel.fillRect(0, 0, 600, 400);

//head
pincel.fillStyle = 'darkgreen';
pincel.fillRect(125, 50, 350, 300);

//left eye
pincel.fillStyle = 'black';
pincel.fillRect(175, 100, 90, 90);

//right eye
pincel.fillStyle = 'black';
pincel.fillRect(335, 100, 90, 90);

//nose
pincel.fillStyle = 'black';
pincel.fillRect(265, 190, 70, 100);

//left mustache
pincel.fillStyle = 'black';
pincel.fillRect(225, 240, 40, 110);

//right mustache
pincel.fillStyle = 'black';
pincel.fillRect(335, 240, 40, 110);
