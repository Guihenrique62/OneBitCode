function result(array){
  return new Promise((resolve,reject)=>{
   setTimeout(()=>{
   let sum = 0
   if(false){
    array.forEach(e => {
     sum += e
    });
    resolve(sum)
    }else{
      reject('houve um erro')
    }
    
    },1000*2)
  })
}

const numbers = []

result(numbers).then((result)=>{
  console.log(`A soma dos numeros é: ${result}` )
}).catch((reject)=>{
  console.log(reject)
})

for(let i = 1;i<=10;i++){
  numbers.push(10)
 }
