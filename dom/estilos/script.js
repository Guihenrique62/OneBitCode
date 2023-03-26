function useLightTheme(){
 document.body.style.backgroundColor = "#ffffff";
 document.body.style.color = "black";
 document.body.style.transition = '800ms';
}

function useDarkTheme(){
  document.body.style.backgroundColor = "black";
  document.body.style.color = "#ffffff";
  document.body.style.transition = '800ms';
}

function alternateTheme(){
  document.body.classList.toggle('is-light')
  document.body.classList.toggle('is-dark')
  document.body.style.transition = '500ms'

}

document.getElementById('lightBtn').addEventListener('click', useLightTheme)
document.getElementById('darkBtn').addEventListener('click', useDarkTheme)
document.getElementById('switchBtn').addEventListener('click', alternateTheme)
