const button = document.querySelector('button')

button.addEventListener("click", async () => {
    console.log('button pushed')
    const h1 = document.querySelector('h1')
    const h2 = document.querySelector('h2')

    const result = await fetch('/api/v1/random-joke')
    const {id , joke, punchline} = await result.json()

    h1.textContent = joke
    h2.textContent = punchline
})