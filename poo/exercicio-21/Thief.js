const Character = require("./Character");

class Thief extends Character{
  attack(person){
    person.lifePoints =- ((this.atkPoints - person.defPoints)* 2)
    return person
  }
}
module.exports = Thief