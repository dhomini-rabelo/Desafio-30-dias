let weButtons = document.querySelectorAll('button')
let weDisplay = document.querySelector('#display')


weButtons.forEach((button) => button.addEventListener('click', appendDigit))


function appendDigit(event){
    endings = {'=': 0, 'AC': 0}

    if (!(event.target.innerText in endings)){
        weDisplay.value += event.target.innerText
    }else if(event.target.innerText === '='){
        getResult()
    }else if(event.target.innerText === 'AC'){
        clearDisplay()
    }
}

function getResult(){
    operation = weDisplay.value.replace('X', '*').replace('÷', '/')
    weDisplay.value = eval(operation)
}

function clearDisplay() {
    weDisplay.value = ""
}