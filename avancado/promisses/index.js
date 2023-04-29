function result(array){
  return new Promise((resolve)=>{
   setTimeout(()=>{
   let sum = 0
    array.forEach(e => {
     sum += e
    });
    resolve('Soma Realizada')
    
    
     console.log(sum)
    },1000*2)
  })
}

const numbers =[]

const p = result(numbers)

for(let i = 1;i<=10;i++){
  numbers.push(10)
 }

 console.table(numbers)