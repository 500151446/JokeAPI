const express = require('express')
const app = express()
const path = require('path')
const root = path.join(__dirname, 'public')

const port = 3000

const jokes = 
[
    {
        id: 1,
        joke: "Why did the scarecrow win an award?",
        punchline: "Because he was outstanding in his field."
    },
    {
        id: 2,
        joke: "Why did the bicycle fall over?",
        punchline: "Because it was two-tired."
    },
    {
        id: 3,
        joke: "What do you call a space magician?",
        punchline: "A flying saucerer."
    },
    {
        id: 4,
        joke: "I don't always tell dad jokes,",
        punchline: "But when I do he laughs."
    },
]


app.use(express.json())
app.use(express.static('public'))

app.get('/', (request, response) => {
    response.sendFile('index.html', { root })
})

app.get('/api/v1/random-joke', (request, response) => {
    const joke = jokes[Math.floor(Math.random() * jokes.length)]
    response.send(joke)
})

app.listen(port, () => console.log(`http://localhost:${port}/`)
)