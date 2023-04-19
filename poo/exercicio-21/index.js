const Character = require("./Character");
const Mage = require("./Mage");
const Thief = require("./Thief");
const Warrior = require("./Warrior");


const naruto = new Character('naruto',200,120,150)
const sasuke = new Thief('Sasuke',120,120,170)
const kakashi = new Mage('Kakashi',220,180,80,50)
const minato = new Warrior('Minato',200,120,200,50,true)
naruto.attack(sasuke)
minato.attack(naruto)


console.log(naruto,minato)