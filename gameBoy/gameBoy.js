let tela = document.querySelector('canvas');
let pincel = tela.getContext('2d');

pincel.fillStyle = 'black ';
pincel.fillRect(0, 0, 400, 400);


pincel.fillStyle = 'lightgrey';
pincel.fillRect(57, 10, 286, 375);

pincel.fillStyle = 'darkgrey';
pincel.fillRect(75, 25, 250, 150);

pincel.fillStyle = 'lightblue';
pincel.beginPath();
pincel.arc(120, 255, 35, 0, 2 * 3.14);
pincel.fill();

pincel.fillStyle = 'black';
pincel.fillRect(110, 225, 20, 60);

pincel.fillStyle = 'black';
pincel.fillRect(90, 245, 60, 20);

pincel.fillStyle = 'darkred';
pincel.beginPath();
pincel.arc(290, 235, 20, 0, 2 * 3.14);
pincel.fill();

pincel.fillStyle = 'darkred';
pincel.beginPath();
pincel.arc(250, 265, 20, 0, 2 * 3.14);
pincel.fill();

pincel.fillStyle = 'black';
pincel.fillRect(150, 350, 50, 5)

pincel.fillStyle = 'black';
pincel.fillRect(215, 350, 50, 5)