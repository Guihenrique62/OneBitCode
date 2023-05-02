async function asyncSum(x,y){
   if(typeof x !== 'number' || typeof y !== 'number'){
      return Promise.reject('os parametros precisam ser numeros')
   }
   return x + y
}

async function asyncSub(x,y){
   if(typeof x !== 'number' || typeof y !== 'number'){
      return Promise.reject('os parametros precisam ser numeros')
   }
   return x - y
}

async function asyncSquare(x){
   return x * x
}

const numbers = [1,4,3,2,5,3]

const arrayP = [asyncSum(2,8),asyncSub(30,30)]

Promise.all(arrayP).then(()=>{
   console.log(arrayP)
}).catch((err)=>{
   console.log(err)
})

Promise.all(numbers.map(number => asyncSquare(number))).then(squares => {
   console.log(squares)
})
