const express = require('express')

const app = express()

const users = [
  {
    name: 'Kyle Hipolito',
    company: 'QPH'
  },
  {
    name: 'Patrick Ursolino',
    company: 'QPH'
  },
  {
    name: 'Ken Dellosa',
    company: 'QPH'
  }
]

const companies = [
  {
    name: 'Quasset'
  },
  {
    name: 'Google'
  },
  {
    name: 'Facebook'
  }
]

app.get('/users', (req, res) => {
  res.json(users)
})

app.get('/companies', (req, res) => {
  res.json(companies)
})

app.listen(5000, () => console.log('Server started on port 5000'))
