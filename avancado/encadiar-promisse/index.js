function verifiAge(age){
  return new Promise((resolve,reject)=>{
    if(age){
      resolve(age > 18)
    }else{
      reject(new Error('Age is required'))
    }
  })
}

function getAge(birthday){
  return new Promise((resolve,reject)=>{
    if(birthday){
      const birthdayYear = new Date(birthday).getFullYear()
      const currentYear = new Date().getFullYear()
      resolve(currentYear - birthdayYear)
    }else{
      reject(new Error('Birthday is required'))
    }
  })
}

getAge('2005-08-02').then((age) => verifiAge(age)).then((isOver18)=>{
  if(isOver18){
    console.log('Maior de idade')
  }else{
    console.log('menor de idade')
  }
}).catch((err) =>{
  console.log(err.message)
})