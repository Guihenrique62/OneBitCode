let seconds = 0

const intervalID = setInterval(() => {
    seconds += 3
    console.log(seconds)
    if(seconds>10){
        clearInterval(intervalID)
        console.log('tempo esgotado')
    }
}, 1000 * 3);