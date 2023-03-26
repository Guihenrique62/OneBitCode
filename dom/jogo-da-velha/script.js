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

btn1.addEventListener('click', mark)
btn2.addEventListener('click', mark)
btn3.addEventListener('click', mark)
btn4.addEventListener('click', mark)
btn5.addEventListener('click', mark)
btn6.addEventListener('click', mark)
btn7.addEventListener('click', mark)
btn8.addEventListener('click', mark)
btn9.addEventListener('click', mark)


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

function verfication(e){
    if(btn1.value == e && btn2.value == e && btn3.value == e){
        btn1.classList.add('p1win')
        btn2.classList.add('p1win')
        btn3.classList.add('p1win')
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








