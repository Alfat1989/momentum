'use strict';

const URL='../data.json'
const changeQuotesBtn=document.querySelector('.change-quote');
const quote=document.querySelector('.quote')
const author=document.querySelector('.author')

const minLength=1;

const getQuotes= async()=>{
    const res = await fetch(URL);
    const data = await res.json();
    const randomQuote=Math.floor(Math.random()*(data.length - minLength) + minLength)
    
    quote.textContent = data[randomQuote].text;
    author.textContent = data[randomQuote].author
}

changeQuotesBtn.addEventListener('click', getQuotes)

const renderQuote=()=>{
   getQuotes()
}

const quotes=()=>{
    
    renderQuote()
    
}

export default quotes