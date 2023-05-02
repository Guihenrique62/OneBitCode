async function awaitFor(seconds){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve()
        }, 1000 * seconds)
    })
}

const numbers = [2,45,3,4,5,33]

async function execute(){
    console.time('map')
    const squares = await Promise.all(numbers.map(async (number)=>{
        await awaitFor(2)
        return number * number
    }))
    console.log(squares)
    console.timeEnd('map')
}

execute()
