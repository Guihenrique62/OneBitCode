function calculateIMC(weight, height) {
 return new Promise((resolve, reject) => {
   if (typeof weight !== 'number' || typeof height !== 'number') {
     reject(new Error('Um dos parâmetros não é um número.'));
   } else {
     const imc = weight / (height * height);
     resolve(imc);
   }
 });
}


function resolves(weight, height){
 calculateIMC(weight,height).then((resolve)=>{

let situation = ''
  if(resolve <= 18.5){
   situation = 'Magreza'
  }else if(resolve > 18.5 && resolve <= 25){
   situation = 'Normal'
  }else if(resolve > 25 && resolve <= 30){
   situation = 'Sobrepeso'
  }else if(resolve > 30 && resolve <= 40){
   situation = 'Obesidade'
  }else if(resolve > 40){
   situation = 'Obesidade Grave'
  }
 console.log(`Uma pessoa com ${weight}KG e ${height}CM tem o IMC de: ${resolve.toFixed(2)}, estando então com a situação: ${situation}`)
 }).catch((err)=>{
  console.log(err)
 })

console.log('calculando')

}

resolves(69.5,'sd')
resolves(69.5,1.86)
resolves(69.5,1.78)
  
