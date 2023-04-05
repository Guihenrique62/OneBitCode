const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const btn4 = document.getElementById('btn4')
const btn5 = document.getElementById('btn5')
const btn6 = document.getElementById('btn6')
const btn7 = document.getElementById('btn7')
const btn8 = document.getElementById('btn8')
const btn9 = document.getElementById('btn9')
let indice = 0
let p1Wins = 0
let p2Wins = 0



document.getElementById('restart').addEventListener('click',()=>{
    btn1.classList.remove('p1win','p1','p2win','p2')
    btn1.innerText = ''
    btn2.classList.remove('p1win','p1','p2win','p2')
    btn2.innerText = ''
    btn3.classList.remove('p1win','p1','p2win','p2')
    btn3.innerText = ''
    btn4.classList.remove('p1win','p1','p2win','p2')
    btn4.innerText = ''
    btn5.classList.remove('p1win','p1','p2win','p2')
    btn5.innerText = ''
    btn6.classList.remove('p1win','p1','p2win','p2')
    btn6.innerText = ''
    btn7.classList.remove('p1win','p1','p2win','p2')
    btn7.innerText = ''
    btn8.classList.remove('p1win','p1','p2win','p2')
    btn8.innerText = ''
    btn9.classList.remove('p1win','p1','p2win','p2')
    btn9.innerText = ''

    
    indice = 0

})

function createEvent(){
    btn1.addEventListener('click', mark)
btn2.addEventListener('click', mark)
btn3.addEventListener('click', mark)
btn4.addEventListener('click', mark)
btn5.addEventListener('click', mark)
btn6.addEventListener('click', mark)
btn7.addEventListener('click', mark)
btn8.addEventListener('click', mark)
btn9.addEventListener('click', mark)
}

function removeEvent(){
    btn1.removeEventListener('click',mark)
    btn2.removeEventListener('click',mark)
    btn3.removeEventListener('click',mark)
    btn4.removeEventListener('click',mark)
    btn5.removeEventListener('click',mark)
    btn6.removeEventListener('click',mark)
    btn7.removeEventListener('click',mark)
    btn8.removeEventListener('click',mark)
    btn9.removeEventListener('click',mark)
}

function verfication(){
    if(btn1.value == 'X' && btn2.value == 'X' && btn3.value == 'X'){
        btn1.classList.add('p1win')
        btn2.classList.add('p1win')
        btn3.classList.add('p1win')
        p1Wins++
        removeEvent()
    }else if(btn1.value == 'O' && btn2.value == 'O' && btn3.value == 'O'){
        btn1.classList.add('p2win')
        btn2.classList.add('p2win')
        btn3.classList.add('p2win')
        p2Wins++
        removeEvent()
    }

    if(btn1.value == 'X' && btn4.value == 'X' && btn7.value == 'X'){
        btn1.classList.add('p1win')
        btn4.classList.add('p1win')
        btn7.classList.add('p1win')
        p1Wins++
        removeEvent()
    }else if(btn1.value == 'O' && btn4.value == 'O' && btn7.value == 'O'){
        btn1.classList.add('p2win')
        btn4.classList.add('p2win')
        btn7.classList.add('p2win')
        p2Wins++
        removeEvent()
    }

    if(btn3.value == 'X' && btn6.value == 'X' && btn9.value == 'X'){
        btn3.classList.add('p1win')
        btn6.classList.add('p1win')
        btn9.classList.add('p1win')
        p1Wins++
        removeEvent()
    }else if(btn3.value == 'O' && btn6.value == 'O' && btn9.value == 'O'){
        btn3.classList.add('p2win')
        btn6.classList.add('p2win')
        btn9.classList.add('p2win')
        p2Wins++
        removeEvent()
    }

    if(btn7.value == 'X' && btn8.value == 'X' && btn9.value == 'X'){
        btn7.classList.add('p1win')
        btn8.classList.add('p1win')
        btn9.classList.add('p1win')
        p1Wins++
        removeEvent()
    }else if(btn7.value == 'O' && btn8.value == 'O' && btn9.value == 'O'){
        btn7.classList.add('p2win')
        btn8.classList.add('p2win')
        btn9.classList.add('p2win')
        p2Wins++
        removeEvent()
    }

    if(btn2.value == 'X' && btn5.value == 'X' && btn8.value == 'X'){
        btn2.classList.add('p1win')
        btn5.classList.add('p1win')
        btn8.classList.add('p1win')
        p1Wins++
        removeEvent()
    }else if(btn2.value == 'O' && btn5.value == 'O' && btn8.value == 'O'){
        btn2.classList.add('p2win')
        btn5.classList.add('p2win')
        btn8.classList.add('p2win')
        p2Wins++
        removeEvent()
    }

    if(btn4.value == 'X' && btn5.value == 'X' && btn6.value == 'X'){
        btn4.classList.add('p1win')
        btn5.classList.add('p1win')
        btn6.classList.add('p1win')
        p1Wins++
        removeEvent()
    }else if(btn4.value == 'O' && btn5.value == 'O' && btn6.value == 'O'){
        btn4.classList.add('p2win')
        btn5.classList.add('p2win')
        btn6.classList.add('p2win')
        p2Wins++
        removeEvent()
    }

    if(btn1.value == 'X' && btn5.value == 'X' && btn9.value == 'X'){
        btn1.classList.add('p1win')
        btn5.classList.add('p1win')
        btn9.classList.add('p1win')
        p1Wins++
        removeEvent()
    }else if(btn1.value == 'O' && btn5.value == 'O' && btn9.value == 'O'){
        btn1.classList.add('p2win')
        btn5.classList.add('p2win')
        btn9.classList.add('p2win')
        p2Wins++
        removeEvent()
    }

    if(btn3.value == 'X' && btn5.value == 'X' && btn7.value == 'X'){
        btn3.classList.add('p1win')
        btn5.classList.add('p1win')
        btn7.classList.add('p1win')
        p1Wins++
        removeEvent()
    }else if(btn3.value == 'O' && btn5.value == 'O' && btn7.value == 'O'){
        btn3.classList.add('p2win')
        btn5.classList.add('p2win')
        btn7.classList.add('p2win')
        p2Wins++
        removeEvent()
    }
}

function mark() {
    if(indice == 0){
    this.classList.add('p1')
    this.innerText = "X"
    this.value = 'X'
    verfication('X')
    indice++
}else if(indice == 1){
    this.classList.add('p2')
    this.innerText = "O"
    this.value = 'O'
    verfication('O')
    indice--
}
}








createEvent()