import express from 'express'
import bp from 'body-parser'
import morgan from 'morgan'

const app = express()

/*
  Set up our middleware
*/

// This is going to give us is if someone parses some data on a query
// string, it's gonna parse that for us and it basically just makes sure
// that we can parse the query string and whatever is in the URL pretty easily
app.use(bp.urlencoded({ extended: true }))

// This one allows us to parse the json body of a POST requests, so we can
// actually see it as json and not like bits of chunks that we have to add
// together like we did in the http server
app.use(bp.json())

// Is just the typeof logging that you want
app.use(morgan('dev'))

// Create a little database
const db = []

// 1. The method verb that i want
// 2. The path that i want to receive
// 3. The controller, what callback you want to run when someone does this POST request
app.post('/todo', (req, res) => {
  const newTodo = {
    id: Date.now(),
    // The text is gonna be whatever is on the request.body.text
    // So that means someone's gonna POST an object to this server and that object
    // is gonna have a text property on it, and the value of that text property
    // is gonna be whatever is gonna be saved in the todo
    text: req.body.text,
  }

  // Push it in our database
  db.push(newTodo)

  // Respond back
  // res.json(newTodo)
  res.status(201).json(newTodo)
})

app.get('/todo', (req, res) => {
  res.json(db)
})

// /todo by a specific ID
app.get('/todo/:id', (req, res) => {
  const todo = db.find((t) => {
    return t.id == +req.params.id
  })
  res.json({ data: todo })
  console.log(req.params.id);
})

// A catch all routes, if someone tries to make a request to anything that's not
// the stuff that i just put above here, then show that. And that's how you can
// handle errors without your app crashing and stuff like that with express

app.listen(8000, () => {
  console.log('Server on http://localhost:8000')
})
