function register(ev){
    console.log(ev)
    const sectionElement = ev.currentTarget.parentNode
    const username = sectionElement.children.username.value
    const password = sectionElement.children.password.value
    const passwordConfirmation = sectionElement.children.passwordConfirmation.value

    if(password === passwordConfirmation){
        alert(`${username} cadastrado com sucesso`)
    }else{
        alert('As senhas são diferentes')
    }
}



const button = document.getElementById('register-button')

button.addEventListener('click', register)

function removeListerner(){
    button.removeEventListener('click', register)
    alert('Event removido')
}

button.addEventListener('mouseover', (ev) => {
    console.log(ev.currentTarget)
})