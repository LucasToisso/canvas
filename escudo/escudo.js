var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

pincel.fillStyle = 'lightgrey';
pincel.fillRect(0, 0, 600, 400);

pincel.fillStyle = 'black';
pincel.beginPath();
pincel.arc(300, 200, 200, 0, 2 * 3.14);
pincel.fill();

pincel.fillStyle = 'red';
pincel.beginPath();
pincel.arc(300, 200, 197, 0, 2 * 3.14);
pincel.fill();

pincel.fillStyle = 'black';
pincel.beginPath();
pincel.arc(300, 200, 160, 0, 2 * 3.14);
pincel.fill();

pincel.fillStyle = 'white';
pincel.beginPath();
pincel.arc(300, 200, 157, 0, 2 * 3.14);
pincel.fill();

pincel.fillStyle = 'black';
pincel.beginPath();
pincel.arc(300, 200, 120, 0, 2 * 3.14);
pincel.fill();

pincel.fillStyle = 'red';
pincel.beginPath();
pincel.arc(300, 200, 117, 0, 2 * 3.14);
pincel.fill();

pincel.fillStyle = 'black';
pincel.beginPath();
pincel.arc(300, 200, 80, 0, 2 * 3.14);
pincel.fill();

pincel.fillStyle = 'blue';
pincel.beginPath();
pincel.arc(300, 200, 77, 0, 2 * 3.14);
pincel.fill();

pincel.fillStyle = 'white';
pincel.beginPath();
pincel.moveTo(300, 123);
pincel.lineTo(300, 225);
pincel.lineTo(350, 256);
pincel.fill();

pincel.fillStyle = 'white';
pincel.beginPath();
pincel.moveTo(228, 177);
pincel.lineTo(372, 177);
pincel.lineTo(300, 225);
pincel.fill();

pincel.fillStyle = 'white';
pincel.beginPath();
pincel.moveTo(300, 123);
pincel.lineTo(300, 225);
pincel.lineTo(250, 256);
pincel.fill();
