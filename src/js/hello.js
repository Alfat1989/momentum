'use strict';

const greeting=document.querySelector('.greeting')


const hello=()=>{
    
    const showHello=()=>{
        const date=new Date();

        const hours=date.getHours();
        const dayTime=Math.floor(hours/6);

        const dayArray=['Morning', 'Afternoon', 'Evening', 'Night']

        const getTimeOfDay=()=>{
            return dayArray[dayTime-1]

        }
        
        const timeOfDay=getTimeOfDay();
        const greetingText=`Good ${timeOfDay},`
        
        greeting.textContent=greetingText

    }

    showHello()
    
}

export default hello