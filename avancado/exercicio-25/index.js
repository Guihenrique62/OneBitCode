async function calculateIMC(weight, height) {
      if (typeof weight !== 'number' || typeof height !== 'number') {
        return Promise.reject(new Error('Um dos parâmetros não é um número.'));
      } else {
        const imc = weight / (height * height);
        return Promise.resolve(imc);
      }
   }

   
async function resolves(weight, height){
try {
    console.log('calculando...')
    const result = await calculateIMC(weight,height)
    console.log('O resultado do IMC foi: ' + result.toFixed(2))
   
   let situation = ''
     if(result <= 18.5){
      situation = 'Magreza'
     }else if(result > 18.5 && result <= 25){
      situation = 'Normal'
     }else if(result > 25 && result <= 30){
      situation = 'Sobrepeso'
     }else if(result > 30 && result <= 40){
      situation = 'Obesidade'
     }else if(result > 40){
      situation = 'Obesidade Grave'
     }
    console.log(`Uma pessoa com ${weight}KG e ${height}CM tem o IMC de: ${result.toFixed(2)}, estando então com a situação: ${situation}`)

    } catch (error) {
        console.log(error)
    }
   
   }
   
   resolves(69.5,1.87)
   resolves(69.5,1.86)
   
     