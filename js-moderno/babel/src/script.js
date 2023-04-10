const media = (...numbers)=>{
  const sum = numbers.reduce((a, b) => a+b)
  return sum / numbers.length
}
media(2,6,3,7,4)
const ponderada = (...numbers) => {
   let mult = 0
   let sum = 0
   for(let i =0; i < numbers.length;i++){
    mult += numbers[i].n * numbers[i].p
    sum += numbers[i].p
   }
   return mult / sum
}
ponderada({n:7,p:2},{n:9,p:5},{n:3,p:1})

const mediana = (...numbers)=>{
   if(numbers.length % 2 == 0){
       const meio = numbers.length / 2
       const mediana = (numbers[meio] + numbers[meio-1]) / 2
       console.log(mediana)
   }else{
       const meio = parseInt(numbers.length / 2) 
       const mediana = numbers[meio]
       console.log(mediana)
   }
   
}
mediana(2,4,5,7,42,99)

const mode = (...numbers) =>{
  const quantities = numbers.map(num => [num, numbers.filter(n => num === n).length])
  quantities.sort((a,b) => b[1] - a[1])
  return quantities[0][0]
}

console.log(`Moda: ${mode(1,1,1,1,1,1,1,2,2,2,3,3,3,4,5,5,6,7,8,5)}`)