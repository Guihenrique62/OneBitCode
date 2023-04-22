const Character = require("./Character");
const Mage = require("./Mage");
const Thief = require("./Thief");
const Warrior = require("./Warrior");


const naruto = new Character('naruto',200,20,10)
const sasuke = new Thief('Sasuke',200,20,10)
const kakashi = new Mage('Kakashi',200,20,10,30)
const minato = new Warrior('Minato',200,20,10,50,true)
naruto.attack(sasuke)
sasuke.attack(naruto)


console.table({naruto,minato,sasuke,kakashi})