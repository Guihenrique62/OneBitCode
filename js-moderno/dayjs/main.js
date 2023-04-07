const dayjs = require('dayjs');

function calculateBirthday(date){
  const birthday = dayjs(date)
  const today = dayjs()
  const yearsOld = today.diff(birthday, 'year')
  const nextBirthday = birthday.add(yearsOld + 1, 'year')  
  const daysToNextBirthday = nextBirthday.diff(today, 'day') +1

  console.log(`você tem ${yearsOld} anos de idade`)
  console.log(`Seu proximo aniversário será em ${nextBirthday.format('DD/MM/YYYY')}`)
  console.log(`Falta ${daysToNextBirthday} dias para o seu aniversário`)

}

calculateBirthday('2003-04-07')


