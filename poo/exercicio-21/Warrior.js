const Character = require("./Character");

class Warrior extends Character{
  constructor(name,lifePoints,atkPoints,defPoints,shield,attacking) {
    super(name,lifePoints,atkPoints,defPoints)
    this.shield = shield
    this.attacking = attacking
  }

  attack(person){
    if(this.attacking === true){
    person.lifePoints -= this.atkPoints - person.defPoints
    return person
   }else{
    return 'está em modo defesa'
   }
  }

  handlerPosition(){
    this.attacking = !this.attacking

    if(this.attacking === false){
      this.defPoints += this.shield
    }
  }
}

module.exports = Warrior