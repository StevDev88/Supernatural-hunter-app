document.querySelector('#getInfo').addEventListener('click', apiRequest)

async function apiRequest(){
    const charName = document.querySelector('input').value
    try{
        const res = await fetch(`https://supernatural-api-hw-100devs.herokuapp.com/api/${charName}`)
        const data = await res.json()
        console.log(data)

        document.getElementById('personName').innerText = data.personName
        document.getElementById('personBirthday').innerText = data.birthdate
        document.getElementById('personBirthplace').innerText = data.birthplace
        document.getElementById('personImg').src = data.image
        document.getElementById('personSpecies').innerText = data.species
        document.getElementById('personQuote').innerText = data.quote
        document.getElementById('personDescription').innerText = data.description

    } catch(error) {
        console.error(error)
    }
}