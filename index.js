const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())

morgan.token('postContent', function (req, res) { return req.method=='POST'?JSON.stringify(req.body):'' })
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :postContent'))

let persons = [
  {
    "name": "Arto Hellas",
    "number": "040-123456",
    "id": 1
  },
  {
    "name": "Ada Lovelace",
    "number": "39-44-5323523",
    "id": 2
  },
  {
    "name": "Dan Abramov",
    "number": "12-43-234345",
    "id": 3
  },
  {
    "name": "Mary Poppendieck",
    "number": "39-23-6423122",
    "id": 4
  }
]

app.get('/api/persons', (request, response) => {
  response.json(persons)
})

app.post('/api/persons', (request, response) => {
  const person = request.body
  if (person.name && person.number) {
    if (persons.find(p => p.name === person.name)) {
      return response.status(400).json({ 
        error: 'name must be unique'
      })
    }
    person.id = Math.round(Math.random()*(10**13))
    persons.push(person)
    response.json(persons)
  } else {
    return response.status(400).json({ 
      error: 'name or number is missing'
    })
  }
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(person => person.id === id)
  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(person => person.id !== id)
  response.status(204).end()
})

app.get('/info', (request, response) => {
  response.send(`<p>Phonebook has info for ${persons.length} people </p><p>${Date()}</p>`)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})