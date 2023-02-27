'use strict';

const play=document.querySelector('.play');
const playNext=document.querySelector('.play-next');
const playPrev=document.querySelector('.play-prev');

let isPlay=false

const audio = new Audio();

const playAudio=()=>{
    audio.src='https://7oom.ru/audio/naturesounds/07%20Birds%20(7oom.ru).mp3';
    audio.currentTime=0;

    isPlay?audio.play():audio.pause();

}


const toggleBtn=()=>{
    play.classList.toggle('pause');
}


const handlePlay=()=>{
    isPlay=!isPlay;
    playAudio()
    toggleBtn()

}

play.addEventListener('click', handlePlay)

const audioPlayer=()=>{
    console.log('audio');
   
}

export default audioPlayer