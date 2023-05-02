async function getCountries(){
    const response = await fetch('https://restcountries.com/v3.1/all')
    const countries = await response.json()
    console.log(countries)

    countries.forEach(renderizeCountries);
}

function renderizeCountries(countries){
    const div = document.createElement('div')
    div.classList.add('card')

    const h2 = document.createElement('h2')
    h2.textContent = countries.name.common

    const img = document.createElement('img')
    img.src = countries.flags.svg
    img.alt = countries.name.common

    div.append(h2,img)

    document.querySelector('.container').append(div)

}
getCountries()