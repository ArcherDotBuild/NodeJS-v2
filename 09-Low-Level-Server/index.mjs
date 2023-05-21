import http from 'http'

// A reference to the IP address of your machine, which is usually something like 127.0.0.1
const host = 'localhost'

// Port is the doorway to your host, it's how you get to the host
// Most websites that are deployed on the internet have a host of 8080 pr 8000
// Locally we have to specify a port, every time you make a server on your localhost on your
// machine, you need to put each one on its own port, because a port can only be occupied
// by one server and not  many, so if you try to start another server on the same port
// you'll get an error saying, this is already being used, try something else.
const port = 8000

// Create a server
// It takes a callback function, which is going to be the handler. How do you handle the
// incoming request from the server? the callback receives two arguments.
// 1. the first one is gonna be the incoming request, REQ
// 2. the second one is gonna be the outgoing response, RES
const server = http.createServer((req, res) => {
  // A route on the server can be a combination of a path and a verb
  // and that would be a route, so you can have many routes on your server
  if (req.method === 'POST') {
    // If someone's doing a POST request here, that means they're trying to send some data
    // we wanna grab that data and we wanna put it somewhere.

    // Because this is very raw, and even if you send JSON up, we're not gonna receive it as JSON
    // we're gonna receive it as a buffer. a file with little bits, that's not very useful for us
    // and it's not gonna come at once, it's being streamed to us in little bits, so we have to
    // collect all of them and then put them together. And then we'll have the data that the
    // client intended to send us.
    let body = ''

    // Then i need to register some events on the request object that fire whenever a new piece of
    // data comes in and then send that data over to the body to be collected, which we could
    // then look at.
    req.on('data', (chunk) => {
      body += chunk
    })

    // When it's done, there's no more data coming in.
    // This is where you would insert into a database
    req.on('close', () => {
      console.log(body)
    })

    // Writing the header, the status code
    res.writeHead(201) // 201, successful POST, 200 sucessful GET

    // Close the response
    req.end('ok')
  } else {
    res.writeHead(200)
    // If you didn't POST, you just did a regular GET
    req.end('hi')
  }
})

server.listen(port, host, () => {
  console.log(`Server on ${host}:${port}`);
})
