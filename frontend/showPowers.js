const params = new URLSearchParams(window.location.search)
const id = params.get('id')

fetch(`http://localhost:3000/powers/${id}`)
// console.log(power.id)
.then(response => response.json())

.then(power => {
    let powerName = document.createElement('h2')
    powerName.innerText = power.name
        let powerDescription = document.createElement('h4')
        powerDescription.innerText = power.description
        

        document.body.append(powerName, powerDescription)
    })
fetch('http://localhost:3000/heroines/')
// console.log(power.id)
.then(response => response.json())
.then(response => response.filter (heroinesPower => heroinesPower.power.id == id))
.then(heroinesPower => heroinesPower.map(heroines => {
    let heroineName = document.createElement('h2')
    heroineName.innerText = heroines.name

        document.body.append(heroineName)
    }))

