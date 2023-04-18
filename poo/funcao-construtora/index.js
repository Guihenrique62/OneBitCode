function Person(name,year,moonth,day,height,weight){
  this.name = name
  this.height = height
  this.year = year
  this.moonth = moonth
  this.day = day
  this.weight = weight
  this.yearOld = function (year){
    return 2023 - parseFloat(year)
  }
}

for(let i =0; i< 5; i++){
  const guilherme = new Person('Guilherme','2003','10','24',1.85,69)
  console.log(guilherme)
}