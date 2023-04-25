
document.getElementById('username').addEventListener('keydown', (key)=>{
    
})

const inputEmail = document.getElementById('email')
inputEmail.addEventListener('keyup',()=>{
        inputValue = document.getElementById('email').value
        const emailFixed = inputValue.replace(/[\s]/g, "")
        emailFixed.match(/...(?<=@)/)
        console.log(emailFixed)
})