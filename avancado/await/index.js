async function asyncSum(x,y){
   if(typeof x !== 'number' || typeof y !== 'number'){
      return Promise.reject('os parametros precisam ser numeros')
   }
   return x + y
}

async function execute(){
   try {
      const result = await asyncSum('52rs',33)
      console.log(result)
   } catch (error) {
      console.log(error)
   }
   
}

execute()