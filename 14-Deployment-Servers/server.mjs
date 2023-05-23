import express from 'express'
import morgan from 'morgan'

const app = express()

// app.use(express.urlencoded())
app.use(express.json())
app.use(morgan('dev'))

const db = []

app.post('/todo', (req, res) => {
  const newTodo = {
    id: Date.now(),
    text: req.body.text,
  }

  db.push(newTodo)
  res.status(201).json(newTodo)
})

app.get('/todo', (req, res) => {
  res.json(db)
})

app.get('/todo/:id', (req, res) => {
  const todo = db.find((t) => {
    return t.id == +req.params.id
  })
  res.json({ data: todo })
})

app.listen(process.env.PORT, () => {
  console.log(`Server on http://localhost:${process.env.PORT}`)
})
