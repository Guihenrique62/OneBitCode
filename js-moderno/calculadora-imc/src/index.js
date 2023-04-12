import './styles/index.css';
import './styles/container.css';
import './styles/media.css'
import manipulateBtn from './scripts/handlerSexBtn';
import calculateBtn from './scripts/calculateBtn';


document.getElementById('menBtn').addEventListener('click', manipulateBtn)
document.getElementById('womenBtn').addEventListener('click', manipulateBtn)

document.getElementById('calculateBtn').addEventListener('click', calculateBtn)

