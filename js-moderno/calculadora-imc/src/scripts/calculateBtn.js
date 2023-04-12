import swal from 'sweetalert';

export default function calculateBtn(event){
  const sweetalert = require('sweetalert')
  event.preventDefault();
   const yearValue = document.getElementById('year').value
   const heightValue = document.getElementById('height').value
   const weightValue = document.getElementById('weight').value
   const sexValue = document.querySelector('.active')
   const height = parseFloat(heightValue) / 100

   const imc = weightValue / (height * height);

   if(imc <= 18.5){
    swal("Cuidado", `Seu IMC é de ${imc.toFixed(2)}\nVocê está extremamente magro`, "warning");
    clearInputs()
    return
   }else if(imc <= 24.9 ){
    swal("Sucesso", `Seu IMC é de ${imc.toFixed(2)}\nVocê está na média`, "success");
    clearInputs()
    return
   }else if(imc <= 29.9){
    swal("Cuidado", `Seu IMC é de ${imc.toFixed(2)}\nVocê está com sobrepeso`, "warning");
    clearInputs()
    return
   }else if(imc <= 34.9){
    swal("Cuidado", `Seu IMC é de ${imc.toFixed(2)}\nVocê está com obesidade de grau 1`, "warning");
    clearInputs()
    return
   }else if(imc <= 39.9){
    swal("Alerta", `Seu IMC é de ${imc.toFixed(2)}\nVocê está com obesidade de grau 2`, "warning");
    clearInputs()
    return
   }else if(imc >= 40 ){
    swal("Alerta", `Seu IMC é de ${imc.toFixed(2)}\nVocê está com obesidade de grau 3`, "warning");
    clearInputs()
    return
   }
   
   function clearInputs(){
    document.getElementById('year').value = ''
    document.getElementById('height').value = ''
    document.getElementById('weight').value = ''
   }
   
}