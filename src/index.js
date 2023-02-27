import image from './images/lazy.png';
import audioPlayer from './js/audio';
import backGround from './js/backGround';
import enterName from './js/enterName';
import hello from './js/hello';
import quotes from './js/quotes'; 
import weather from './js/weather';
import dateAndTime from './js/time';

// const createImage = (src) => new Promise((res, rej) => {
//   const img = new Image();
//   img.onload = () => res(img);
//   img.onerror = rej;
//   img.src = src;
// });

// async function render() {
//   const subHeader = document.createElement('h2');
//   subHeader.innerHTML = 'This elements was created by js';
//   const myImage = await createImage(image);
//   document.body.appendChild(subHeader);
//   document.body.appendChild(myImage);
// }

// render();
audioPlayer();
backGround();
enterName();
hello();
quotes();
dateAndTime();
weather();
dateAndTime();