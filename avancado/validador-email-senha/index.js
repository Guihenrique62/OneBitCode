
function validaremail(email){
        if(!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
           const err = new Error('email Invalido')
           err.input = 'email'
           throw err
        }
}

function validarSenha(password){
        if(password.length < 8 || !password.match(/[a-z]/) || !password.match(/[A-Z]/) || !password.match(/[0-9]/) || !password.match(/[^a-zA-Z0-9\s]/)) {
                const err = new Error('senha Invalido')
                err.input = 'password'
                throw err  
        }
}



const userInputs = {
        name: document.querySelector('#username'),
        email: document.querySelector('#email'),
        password: document.querySelector('#password'),

}

const form = document.querySelector('form')
form.addEventListener('submit',(ev)=>{
     ev.preventDefault()
     const error = document.querySelector('.error')
                error.style.display = 'none'
        try {
                console.log(userInputs.email.value)
                validaremail(userInputs.email.value)
                validarSenha(userInputs.password.value)
                console.log('passou')
        } catch (err) {
                console.log(err.message)
                const error = document.querySelector('.error')
                error.style.display = 'block'
        }
})





// inputEmail.addEventListener('keyup',()=>{
//         const inputValue = document.getElementById('email').value
//         const emailFixed = inputValue.replace(/[\s]/g, "")
//         emailFixed.match(/...(?<=@)/)
        
// })