class Character {
 constructor(name,lifePoints,atkPoints,defPoints){
  this.name = name
  this.lifePoints = parseFloat(lifePoints) 
  this.atkPoints = parseFloat(atkPoints)
  this.defPoints = parseFloat(defPoints)
 }

 attack(person){
  person.lifePoints =- (this.atkPoints - person.defPoints)
  return person
 }
}

module.exports = Character