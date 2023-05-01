function asyncSum(x,y){
   return new Promise((resolve,reject)=>{
      if(typeof x !== 'number' || typeof y !== 'number'){
         reject('O valor inserido não é numerico')
      }else{
         resolve(x + y)
      }
   })
}

function asyncSub(x,y){
   return new Promise((resolve,reject)=>{
      if(typeof x !== 'number' || typeof y !== 'number'){
         reject('O valor inserido não é numerico')
      }else{
         resolve(x - y)
      }
   })
}

function asyncSquare(x){
   return new Promise((resolve)=>{
      resolve(x * x)
   })
}

const numbers = [1,4,3,2,5,3]

const arrayP = [asyncSum(2,8),asyncSub(30,25)]

Promise.all(arrayP).then(()=>{
   console.log(arrayP)
}).catch((err)=>{
   console.log(err)
})

Promise.all(numbers.map(number => asyncSquare(number))).then(squares => {
   console.log(squares)
})
