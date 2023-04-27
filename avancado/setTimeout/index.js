console.log('programa iniciado')

const timeoutId = setTimeout(()=>{
    console.log('3 segundos se passaram desde que o sistema foi iniciado')
}, 1000 * 3)

clearTimeout(timeoutId)

