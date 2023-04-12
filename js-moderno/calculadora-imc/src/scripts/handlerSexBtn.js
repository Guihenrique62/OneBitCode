export default function manipulateBtn (ev){
  const element = ev.currentTarget
  if (element.id === 'menBtn'){
    element.classList.add('active')
    document.getElementById('womenBtn').classList.remove('active')
  }else if(element.id === 'womenBtn'){
    element.classList.add('active')
    document.getElementById('menBtn').classList.remove('active')
  }
}