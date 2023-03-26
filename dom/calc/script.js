const input = document.getElementById('input')
const result = document.getElementById('result')
const charKeys = document.querySelectorAll('.charKey')
const switchTheme = document.getElementById('themeSwitcher')
const root = document.querySelector(':root')
const main = document.querySelector('main')

const allowkeys = ["(", ")", "/", "*", "-", '+', '.', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '%', ' ']

input.addEventListener('keydown', (ev)=>{
    ev.preventDefault()
    if(allowkeys.includes(ev.key)){
        input.value += ev.key 
        return}
    if(ev.key === 'Backspace'){input.value = input.value.slice(0, -1)}
    if(ev.key === 'Enter'){calculate()}
})

document.getElementById('clear').addEventListener('click',()=>{
    input.value = ''
    input.focus()
})

document.getElementById('equal').addEventListener('click', calculate)

charKeys.forEach((charKeyBtn)=>{
    charKeyBtn.addEventListener('click',()=>{
        const value = charKeyBtn.dataset.value
        input.value += value
    })
})
function calculate(){
    result.value = 'ERRO'
    result.classList.add('error')

    result.value = eval(input.value)

    result.classList.remove('error')
}

// trocar theme
switchTheme.addEventListener('click', ()=>{
    if(main.dataset.theme === 'dark'){
        root.style.setProperty('--bg-color','#f1f5f9')
        root.style.setProperty('--border-color','#aaa')
        root.style.setProperty('--font-color', '#212529')
        root.style.setProperty('--primary-color', '#26834a')
        main.dataset.theme = 'light'
    }else{
        root.style.setProperty('--bg-color','#212529')
        root.style.setProperty('--border-color','#666')
        root.style.setProperty('--font-color', '#f1f5f9')
        root.style.setProperty('--primary-color', '#4dff91')
        main.dataset.theme = 'dark'
    }
})

document.getElementById('copyToClipboard').addEventListener('click', (ev)=>{
    const button = ev.currentTarget
    if(button.innerText === 'Copy'){
        button.innerText = 'Copied!'
        button.classList.add('success')
        navigator.clipboard.writeText(result.value)
    }else{
        button.innerText = 'Copy'
        button.classList.remove('success')
    }

})