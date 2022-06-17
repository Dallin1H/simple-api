const express = require('express')
const app = express()

const people = {
    'matthewmisrendino': {
        age: 34,
        birthName: 'Matthew Misrendino',
        birthLocation: 'The Jersey Shore'
    },
    'chancemorris': {
        age: 49,
        birthName: 'Thomas Jefferson Chance Morris',
        birthLocation: 'Detroit, Michigan'
    },
    'unknown': {
        age: 0,
        birthName: 'unknown',
        birthLocation: 'unknown'
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api', (req, res) => {
    res.json(people)
})

app.get('/api/:name', (req, res) => {
    const person = req.params.name.split(' ').join('').toLowerCase()
    if (people[person]) {
        res.json(people[person])
    } else {
        res.json(people['unknown'])
    }
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})
