var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

//background
pincel.fillStyle = 'green';
pincel.fillRect(0, 0, 600, 400);

//first triangle
pincel.fillStyle = 'yellow';
pincel.beginPath();
pincel.moveTo(300, 50);
pincel.lineTo(50, 200);
pincel.lineTo(550, 200);
pincel.fill();

//second triangle
pincel.fillStyle = 'yellow';
pincel.beginPath();
pincel.moveTo(50, 200);
pincel.lineTo(300, 350);
pincel.lineTo(550, 200);
pincel.fill();

//cirlce
pincel.fillStyle = 'darkblue';
pincel.beginPath();
pincel.arc(300, 200, 100, 0, 2 * 3.14);
pincel.fill();
