const body = document.body
const dropDown = document.querySelector('#dropDown')
const heroineDiv = document.querySelector('.heroineCards')
heroineDiv.className = 'heroineCards'
body.appendChild(heroineDiv)

function showHeroines(heroines) {
    return heroines.map(createCard)
}

function createCard(heroine) {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<a href=showHeroines.html?id=${heroine.id}>${heroine.name}</a>`
    heroineDiv.append(h2)
}

function showPowers(powers) {
    return powers.map(createOptions)
}

function createOptions(power){
    const option = document.createElement('option')
    option.innerText = power.name
    option.value = power.id
    dropDown.appendChild(option)
}

function handleResponse(response) {
    return response.json()
}

fetch('http://localhost:3000/heroines')
    .then(handleResponse)
    .then(showHeroines)

fetch('http://localhost:3000/powers')
    .then(handleResponse)
    .then(showPowers)