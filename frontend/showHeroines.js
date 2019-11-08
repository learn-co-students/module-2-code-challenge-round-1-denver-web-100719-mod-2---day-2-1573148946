const params = new URLSearchParams(window.location.search)
const id = params.get('id')

fetch(`http://localhost:3000/heroines/${id}`)
    .then(response => response.json())
    .then(heroine => {
        let heroineName = document.createElement('h2')
        heroineName.innerText = heroine.name
        
        let powerName = document.createElement('h3')
        powerName.innerText = heroine.power.name
        powerName.innerHTML = `<a href=showPowers.html?id=${heroine.power.id}>${heroine.power.name}</a>`

        let powerDescription = document.createElement('h4')
        powerDescription.innerText = heroine.power.description
        document.body.append(heroineName, powerName, powerDescription)
    })