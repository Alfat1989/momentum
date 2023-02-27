'use strict';

const body = document.querySelector('body');

const sliderPrev = document.querySelector('.slide-prev');
const sliderNext = document.querySelector('.slide-next');

const maxNum = 20;
const minNum = 1;

let randomNum;

const dayArray = ['morning', 'afternoon', 'evening', 'night'];

// get randjm numbers
const getRandomNum = () => {
  return (randomNum = Math.floor(
    Math.random() * (maxNum - minNum) + minNum
  ));


};

// time of day function
const getTimeOfDAy = () => {
  const date = new Date();
  const hours = date.getHours();
  const dayTime = Math.floor(hours / 6);

  return dayArray[dayTime - 1];
};

// set Background function
const setBg = () => {
  const timeOfDay = getTimeOfDAy();
  const bgNum = String(randomNum).padStart(2, '0');


  // body.style.backgroundImage=`url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg')`
  const img = new Image();
  img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
  img.onload = () => {
    body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg')`;
  };
};


const getSlideNext = () => {
  randomNum += 1;
  if (randomNum > 20) {
    randomNum = 1;
  }

  setBg();

};

const getSlidePrev = () => {
    randomNum -= 1;
  if (randomNum <1) {
    randomNum = 20;
  }

  setBg();

};

// main function
const backGround = () => {
  getRandomNum();
  setBg();

  sliderNext.addEventListener('click', getSlideNext);
  sliderPrev.addEventListener('click', getSlidePrev);
};

export default backGround;
