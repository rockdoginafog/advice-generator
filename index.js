const getAdvice = async() => {
    const response = await fetch('https://api.adviceslip.com/advice')
    const data = await response.json()
    document.getElementById('random-advice-title').innerHTML = data.slip.id
    document.getElementById('random-advice-text').innerHTML = (`"${data.slip.advice}"`)
}

getAdvice()












