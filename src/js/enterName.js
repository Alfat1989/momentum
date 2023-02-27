'use strict';

const enterName=()=>{
    
    const inputTag=document.querySelector('.name')
    const user='userName'

    if(localStorage.getItem(user)){
        const getLocalName=localStorage.getItem(user)
        const parseName=JSON.parse(getLocalName)
        inputTag.value=parseName
    }

    inputTag.placeholder='[Enter name]'

    const handleInputChange=(e)=>{
        // localStorage.removeItem(user) //
        inputTag.value=e.target.value
        localStorage.setItem(user, JSON.stringify(inputTag.value))

    }

    inputTag.addEventListener('change', handleInputChange)
    
}

export default enterName