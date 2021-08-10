const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2] //sV98s3JFy84mC6x

const url =
  `mongodb+srv://fullstack:${password}@cluster0.npo9f.mongodb.net/phonebook?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
  id: Number,
})

const Person = mongoose.model('Person', personSchema)

if (process.argv.length === 3){
  
  Person
  .find({})
  .then(persons => {
    if (persons.length > 0) {
      console.log('Phonebook:')
      persons.forEach(p => { console.log(`${p.name} ${p.number}`) })
    }
    mongoose.connection.close()
  })
} else {
  const person = new Person({
    name: process.argv[3],
    number: process.argv[4],
    id : Math.round(Math.random()*(10**13))
  })

  person.save().then(result => {
    console.log(`added ${person.name} number ${person.number} to phonebook`)
    mongoose.connection.close()
  })
}