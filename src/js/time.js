'use strict';

const time = document.querySelector('.time');
const date = document.querySelector('.date');

const dateAndTime=()=>{

  const showTime=()=>{

    const dates=new Date();

    const options={weekday:'long', month: 'long', day:'numeric', timeZone: 'UTC',};
    const currentTime=dates.toLocaleTimeString();
    const currentDate=dates.toLocaleDateString('en-US', options)
    time.textContent=currentTime
    date.textContent=currentDate
    
    setTimeout(showTime, 1000)
  }

  showTime()

}



export default dateAndTime;
