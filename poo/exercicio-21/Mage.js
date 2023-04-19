const Character = require("./Character");

class Mage extends Character{
  constructor(name,lifePoints,atkPoints,defPoints,magic){
    super(name,lifePoints,atkPoints,defPoints)
    this.magic = magic
  }

  attack(person){
    person.lifePoints -= (this.atkPoints + this.magic - person.defPoints)
    return this
  }

  heal(person){
    person.lifePoints += this.magic * 2
    return this
  }
}

module.exports = Mage