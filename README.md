# Introduction to NodeJS v2

## FrontEnd Masters

#### Teacher: Scott Moss

#### Course website:

https://intro-to-nodejs-v2-site.vercel.app/

#### Repos:

- Course repo:
- Course examples repo:

## Section 01: Introduction

## 1. Installing NodeJS

#### What is NodeJS

NodeJS is a runtime for built on top of Chrome's V8. It allows you to develop apps in JavaScript outside of the browser. It's single threaded non blocking and asynchronous. This is acheived by the use of an event loop at the core of NodeJS. If you know JS then you already know how to develop with NodeJS, kinda...

JavaScript is single threaded, as in, it's only going to be able to process work and amount of work in one little isolated instance and then everything else kinda runs in the background. This allow Node to be able to process things much faster than a lot of other OS level languages, as long as those tasks are not CPU bound. So if you're not doing things like arithmetic or AI or machine learning, NodeJS is probably a perfect tool for you because it can handle things and put them in the background and continue to stay open to handle incoming requests and things like that

So that's why it's a very popular tool because it kind allows you to scale a lot faster for smaller tasks like API's, which are like 90% of back end apps these days anyway.

### Use cases

Because NodeJS can run outside of the browser, it can be used for pretty much anything!

- API's and servers
- Databases (yes some DB's are built in Node)
- CLI's
- Build Tools
- Automations
- Basic Scripting
- GPU shopping bots 👀

### Installing NodeJS

#### For Windows

If you're running windows and not using WSL, I recommend you use the official installer from the NodeJS site. Choose the latest LTS version.

#### For everyone else

versions of NodeJS at once and switch when you need. Also, NVM installs NodeJS in a folder that will not have permission errors that you would otherwise run into with the official installer.

https://github.com/nvm-sh/nvm

Once you have nvm installed, you need to install a Node version. You can download the latest LTS version with this command.

This is gonna install the latest version for you, so you don't have to figure out which one it is.
`nvm install --lts`

## 2. Executing Node

**folder 01**

How we can actually execute a Node program, because there's several ways, we're really only gonna talk about the important ones.

So the first one is called the Node REPL. And REPL stands for read, evaluate, print, loop. It's basically an interactive shell that's gonna be in the execution context of the runtime of your choice. In this case, it's gonna be Node.

So we'll have an in interactive shell inside of our terminal where we can just write some JavaScript in the Node runtime, very similar to where if you open up the console in a browser and you were able to interact. So we're gonna do the same thing, but outside of the browser using NodeJS.

And the way that you can do that is if you just go to your terminal.

First of all, just to double check you have Node installed `which node`. And it's gonna point to where you have Node installed. You can see that i used nvm, so it's installed in this nvm folder.

See what version of Node you have `node --version`.

So once you have it installed, now we wanna execute on that REPL, we wanna turn it on, you can just type in, `node`, with no arguments. And you should see something like this "Welcome to NodeJS vxx.xx.xx.".

`const me = "ElfGodd"`
`me // 'ElfGodd'`

So as you can see, this is a great place to prototype different things, try out different features in JavaScript.

But you probably won't be using the Node REPL to build any applications as you can tell. This code isn't being written to a file anywhere. REPL is just a playground to get some stuff going. To exit the REPL i can hit ctrl + c, twice.

`aler('Hello from Alert)` This it's not gonna work in Node, because there is no alert. Node doesn't have a user interface, there's nothing visual to Node, it's running on your operating system in the background, there's not CSS, no DOM, it's a OS level language.

So let's actually do something that we can do in Node that does also work in the browser. And it's gonna be our favorite friend, console.log.

`node index.js`

If it's usually something with UI facing, anything with the DOM, like querying a DOM elements, things like that it's not gonna work in Node because there's nothing there.

And then on the flip side, if there's usually something to do with the file system or any OS level things like networking, it's probably nt gonna work in the browser.

## Section 02: Basic Components

## 3. Globals

**folder 02**

NodeJS was originally created from Chrome's V8 runtime, and that's what it runs on.

Like the Browser, NodeJS comes with some practical globals for us to use in our applications.

#### Common

- **global** Think of this as like **window** but for NodeJS. DON'T ABUSE IT!
- **dirname** This global is a **String** value that points the the directory name of the file it's used in.
- **filename** Like **\_\_dirname**, it too is relative to the file it's written in. A **String** value that points the the file name
- **process** A swiss army knife global. An **Object** that contains all the context you need about the current program being executed. Things from env vars, to what machine you're on
- **exports module require** These globals are used for creating and exposing modules throughout your app. We'll get to modules in a second 🌈

#### The rest

Depending on what version on NodeJS you're running, there are so many more globals. Not as many as the Browser, but enough that you'll probably never use many of them. Check them out :link: [here](https://nodejs.org/api/globals.html).

## 4. Modules

**folder 03**

How would we share or how would we include JavaScript in other JavaScript?

How modules are just consuming JavaScript in general and not just NodeJS.

There is no GUI in NodeJS, no HTML or CSS. This also means there aren't any scipt tags to include JS files into our application. NodeJS uses modules to to share your JavaScript with other JavaScript in your apps. No window or globals needed. If you've ever done `window.App = window.App || {}` then you'll like this!.

#### What is a module

A module is a reusable chunk of code that has its own context. That way modules can't interfere with or polute the global scope.

You can think of them like lego blocks that you can create, import, and share.

#### Two module types

By default, NodeJS uses common js modules. With newer versions of NodeJS we can now take advantage of ES6 modules. To opt into using this syntax, you can use the **.mjs** extension instead of **.js.** We'll be using the ES6 module syntax going forward as they are the standard now with browsers adding support now.

The difference is, if i wanted to share this action function with another JavaScript file somewhere else in my application, in the browser by having this in the file right now. It's gonna be attached to the global so i can access it via **window** in the next JavaScript file.

But in NodeJS there is no window and nothing gets attached to the global space by default. Because all your files inside of the NodeJS actually get encapsulated in own little module fo they don't leak.

So what you have to do here to be able to expose this piece of code, that way it can be used in another module, another file, is that you have to explicitly say i want this piece of code to be a module, i want it to be usable somewhere else, i wanna export it. So with CommonnJS syntax `module.exports = action`

**index.js**

```javascript
const action = () => {
  console.log('Hello from modules')
}

module.exports = action
```

So in this case, i wanna export the action function. And what this allows me to do is in another file, i can call it **app.js**

**app.js**

```javascript
// const action = require('./index.js')
const action = require('./index')
```

It's a function and it takes a relative path to another JavaScript file that you want to bring into this JavaScript file. I don'thave to put the **.js** here if it's a js file

`node app.js // Hello from modules`

**CommonJS** is the standard for NodeJS for quite some time, it's what ships with NodeJS, it's the default module syntax for NodeJS. But we're gonna use the newer one because that's the future of NodeJS, it's the future of the browers, it's the attempt of all the browser people and the NodeJS people coming together and, okay, how do we simplify this? How do we make it where JavaScript is truly universal across enviroments?

And that's gonna be called the ES modules or ECMAScript modules. So that's what we're gonna be using in this course, because we have access to it on version 14.

So in order to do that, a couple things we have to do. First, we have to tell NodeJS what version of modules that we want and there's a few ways we can do it.

- We can be explicit by using the .mjs extension, and by doing that, you're going to let Node know that, hey, i'm using ES modules in this file so use that instead of the .js

- Another way is through the package.json and you can just say i wanna use type ES modules

#### Module syntax

Now, let's create our first module. The only thing we have to do is expose some code in one for our JavaScript files. We can do that with the **export** keyword.

```javascript
// utils.js
export const action = () => {}

export const run = () => {}
```

```javascript
// app.js

import { action, run } from './utils'
```

Few things happening here. Let's look at the **utils.js** file. Here we're using the **export** keyword before the variable declaration. This creates a named export. With the name being whatever the variable name is. In this case, a function called **action**. Now in **app.js**, we **import** the action module from the **utils** file. The path to the file is relative to the file you're importing from. You also have to prefix your path with a **'./'**. If you don't, Node will think you're trying to import a built in module or npm module. Because this was a named export, we have to import with brackets **{ action, run }** with the exact name of the modules exported. We don't have to import every module that is exported.

Usually if you only have to expose one bit of code, you should use the **default** keyword. This allows you to import the module with whatever name you want.

```javascript
// utils.js
default export function () {
  console.log('did action')
}
```

```javascript
// app.js
import whateverIWant from './utils'
```

You can read more about the module syntax on the :link: [NodeJS docs](https://nodejs.org/api/globals.html).

#### Internal Modules

NodeJS comes with some great internal modules. You can think of them as like the phenonminal global APIs in the browser. Here are some of the most useful ones:

- **fs** - useful for interacting with the file system.
- **path** - lib to assit with manipulating file paths and all their nuiances.
- **child_process** - spawn subprocesses in the background.
- **http** - interact with OS level networking. Useful for creating servers.

## 5. File System

**folder 04**

Until NodeJS, there wasn't a great way to access the file system on a machine with JavaScript, this is due to secutrity restrictions in most browsers. With NodeJS, one can create, edit, remote, read, strereadFileam, & more with files. If you've ever used a build tool like webpack or a parser like babel, then you realize just how powerful NodeJS can be when manipulating the file system.

There are sync versions of modules, and that really comes down to like how NodeJS works. So if you don't use the sync version of a file system method, it's going to be asynchronous. As in, it's going to be set aside in the event loop tobe processed on the next tick at some point. Because it's asynchronous, we're going to to continue to accept input throughout this Node execution while this is being processed in the background. And then Node will notify us via a callback when it's done.

If you prefer to block the process of Node as in, hey do not move forward, do not process any other code, do not accept any other input until this is done, then you would use the sync version.

In most cases you probably would never use the sync version of anything in NodeJS. There are some rare ones where you literally don't want anything to happen. Typically like on a server startup, or some initialization where you just want everything to be done before the next thing happens because it only happens once.

### Reading a file

NodeJS ships with a powerful module, **fs** short for file system. There are many methods on the :link: [fs module](https://nodejs.org/api/fs.html). To read a file, we'll use the **readFile** method.

Create a simple html file **template.html**.

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
  <h1>{title}</h1>
  <p>{body}</p>
</body>
</html>
```

This **html** file will be used as template and has placeholders that we will interpolate later when writing a file.

To read the file:

```javascript
import { readFile } from 'fs/promises'

let template = await readFile(
  new URL('./template.html', import.meta.url),
  'utf-8'
)
```

The **fs** module has import for promise based methods. We'll opt to use those as they have a cleaner API and using async + non-blocking methods are preferred. More on that later. Because we're using **.mjs** files, we don't have access to **\_\_dirname** or **\_\_filename** which is what is normally used in combination with the path module to form an appropiate file **path** for fs. So we have to use the **URL** global that takes a relative path and a base path and will create a URL object that is accepted by **readFile**. If you were to log **template**, you'd see that its just a string.

```javascript
import { readFile, writeFile } from 'fs/promises'

let template = await readFile(new URL('./test.html', import.meta.url), 'utf-8')

const data = {
  title: 'My new file',
  body: 'I wrote this file to disk using node',
}

for (const [key, val] of Object.entries(data)) {
  template = template.replace(`{${key}}`, val)
}

await writeFile(new URL('./index.html', import.meta.url), template)
```

You should now have a **index.html** file that is the same as the **template.html** file but with the h1 and body text substituted with the data object properties. This is some powerful stuff 🔥! Open it in a browser and see it work. At their core, static analysis tools like TypeScript, Babel, Webpack, and Rollup do just this. Also, please don't use my hacky templating "engine" in a real app! 🤣

#### What is a buffer in Example 3

A buffer, it's like the little individual bits of, in this case, a file. It's all the little bits that make up a file. It's not a string, it's implementation. It's when you want to stream something.

But this isn't useful if we need to do some processing, unless you wanna do a process on a buffer which i don't. So we need to convert this to a string, and then we can actually look those variables, those placeholders, and we can interpolate them with actual values.

#### What is Object.entries in Example 4

When you call Object.entries and pass in an object to it, it's basically gonna return an array of key value pairs. Si tuples, so it'd be an array of arrays. And each array in the big array is gonna have a key as its first value, and a value as its second value.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries

## 6. Error Handling

**folder 05**

The last thing you want is your entire server crashing because of an error, or, is that exactly what you want 🤷‍♀️? Regardless, you should have th choice. So you better handle those errors. Depending on the type of code (sync, promise, async callback, async await, etc) Node allows us to handle our errors how we see fit.

#### Process exiting

When a exception is thrown in NodeJS, the current process will exit with a code of **1**. This effectively errors out and stops your programing completely. You can manually do this with:

**process.exit(1)**

Although you shouldn't. This is low level and offers no chance to catch or handle an exception to decide on what to do. Imagine your entire API shutting down and restarting just because a user sent a malformed payload that resulting the DB throwing and exception. That would be terrible.

#### Async Errors

When dealing with callbacks that are used for async operations, the standard pattern is:

```javascript
fs.readFile(filePath, (error, result) => {
  if (error) {
    // do something
  } else {
    // yaaay
  }
})
```

Callbacks accept the **(error, result)** argument signature where error could be **null** if there is no error.

For **promises**, you can continue to use the **.catch()** pattern. Nothing new to see here.

For **async / await** you should use **try / catch**.

```javascript
try {
  const result = await asyncAction()
} catch (e) {
  // handle error
}
```

#### Sync Errors

For sync errors, try / catch works just fine, just like with async await.

```#### javascript
try {
  const result = syncAction()
} catch (e) {
  // handle error
}
```

#### Catch All

Finally, if you just can't catch those pesky errors for any reason. Maybe some lib is throwing them and you can't catch them. You can use:

```javascript
process.on('uncaughtException', cb)
```

## Section 03: Packages

## 7. Creating Local Packages & NPM

**folder 06**

The most beautiful part about NodeJS is not the JavaScript, it's the thriving community. There are millions of node projects ready to be installed and consumed by your application. These projects are called packages. A package can have several modules and other packages. NodeJS has built in support for these packages so you can take advantage of them at any time.

#### NPM

**Init**
To consume a package, we must first turn our app into a package. We can do this with a simple file called **package.json** on the root of our app. Writing it by hand is cool, but using a CLI called **npm** is better. NPM was already installed when you installed NodeJS. In a new folder, run: **npm init**

This will initialze a new package by walking you through a few prompts. Once you're finished, you'll have a **package.json** file that looks like this:

```json
{
  "name": "app",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

Now are soon to be app is a package. We'll get into how to distribute and deploy different types of Node.js apps, but for now, this package is staying local. Let's take a look at some of these fields:

- **"name"** - is the name of your package. Can be anything since we're local
- **"version"** - is the :link: [Semantic Version Number](https://semver.org/) or semver
- **"main"** - the main entry point into your package
- **"scripts"** - object of custom scripts to be excuted with **npm** cli

#### Commands

NPM has :link: [several commands](https://docs.npmjs.com/cli/v6/commands) at its disposal that you don't need to know really. There are some important ones that you will use repeatedly.

- **npm install** - installs given module(s) from remote registries or local sources
- **npm test** - runs the **test** script in your package.json
- **npm uninstall** - will uninstall a give package

No matter what company you're at or the app, you'll work with these three commands all the time. Unless you're one of the crazies that don't write tests 😘. The rest of the commands will be unique to your app.

#### Finding and installing packages

Most modules are hosted on a registry somewhere. The biggest and most used one is, well, the :link: [NPM registry](https://www.npmjs.com/). They don't stand alone though. Github (which owns NPM now) also allows devs to publish packages to their registry. And there are many others. The sweet thing about NPM, is that you can point to any registry, default being NPM.

A good flow to find a package you need that you don't already know by name yet, is to go the the :link: [npm site](https://www.npmjs.com/) or Google and search for what you need. Say you need a lib to convert html to PDF's 🤷, NPM will give you back a list of packages.

Once you click a package, you can see the documentation from the README.md and any links to Github or website. You can also see the author and the last time it was updated. All of this info is great to help with choosing a package to install. You never know what you're going to get. Once you know the package(s) you want to install, you can do so with:

`npm install package1 package2 package3 --save`

You can install as many packages with one command as you like. The `--save` flag is to let NPM know to update the package.json's dependency field with all of these packages. We need this because we don't want to check in the downloaded packages into source code for many reason. So how does anyone else on your team, or even you on another machine know what packages this app needs? Well NPM will save the package names and versions so NPM on another machine can look at that and install from there. Your package.json should have updated.

You'll also notice a new folder on your project's root named **node_modules**. This is where NPM will install your packages. You should never have to touch this folder. But if you take a peek, you'll see more than the packages you installed. That's because those packages needed other packages, and so on and so on. NPM stores them flat in the node_modules folder. This helps with preventing duplicates and circular dependencies.

There's so much more to learn about NPM and node_modules, but this isn't the advanced course. This is all you need to know to build something, which is what we're doing next.

`npm install lodash --save` we are passing a flag **--save** you can think of flags as like, options that we pass into a command line tool

## 7. Using NPM packages

**folder 07**

When we were importing modules that we created, notice that i put this **./** here, this is very important, this is not optional or if you got to go up a couple levels, **../**, this is telling NPM, NodeJS, i want you to resolve a module that i created locally, it's on the file system, it's in this project, go get it, it's a file.

But when you don't put the **./** in front of it, it's telling NPM, NodeJS, this is either an internal module like **fs** or it's something that i installed via NPM and it's in a **node_modules** folder

`npm uninstall lodash`

#### Global NPM packages

`npm install yarn -g` **-g** for globally, this will install this package globally to use for ever, think about it something like a CLI

`which npx` NPX is basically like running one off global install

`npx yarn add lodash` install yarn once to use the lodash package, without installing yarn globally

`npm uninstall yarn -f` uninstall globally

Multiple install at one time `npm install react lodash express typescript jest
`

## 8. Running NPM Scripts

`npm test`

#### script example:

`npm run serve` To run the index.html with the serve package installed

`npm run rm index2.html` Removes index2.html first create a copy of index.html and rename it to that name

## Section 04: CLI

## 9. Setup a CLI Script with NodeJS

**folder 08 - Reddit CLI**

A CLI, or command line interface is a program desgined to start and complete one off tasks. Like git or npm. Node.js is a perfect runtime to create a CLI that will run on any machine that has NodeJS isntalled.

#### Creating a CLI

Creating a CLI in NodeJS just takes a extra step or two because they are really just an ordinary NodeJS app wrapped behind a bin command. For this exercise, we'll create a CLI that opens a random reddit post in our browser. To start, we'll create a new folder and make it a package with npm init.

Once inside that folder, create a file reddit.mjs:

```javascript
// reddit.mjs
#! /usr/bin/env node

console.log('hello from your CLI')
```

The fist line on that file is called a shabang or hashbang. It's needed to tell the machine where the interpreter is located that is needed to execute this file. For us, that will be NodeJS.

Next we need to tell NodeJS what the name of our CLI is so when can actually use it in our terminal. Just have to add a section to our package.json:

```javascript
"bin": {
  "reddit": "./reddit.mjs"
}
```

Once installed, this package will have it's bin command installed into your machine's bin folder allowing us to use the **reddit** command.

Lastly, we must install our own package locally so we can test out the CLI. We could just execute the file with the node runtime, but we want to see the CLI actually work.

`npm install -g`

We can simply instll with no args which tells npm to install the current director. The **-g** flag means we want to globally install this package vs in a local node_modules.

You should now be able to run **reddit** and see your log print.

#### Packages in our Package

Now to realize our dream of our reddit CLI opening a random reddit post, we have some work to do. Luckily for us, we can use NPM to install some packages to help.

`npm install open node-fetch yargs --save`

We'll install just these three packages.

- **open** - will open our browser with a URL
- **node-fetch** - is a fetch client that we can use to hit the reddit API
- **yargs** - will allow us to process any flags or arguments passed to the CLI

So to put it all together

```javascript
#! /usr/bin/env node
// import our packages
import open from 'open'
import fetch from 'node-fetch'
import yargs from 'yargs'

// parse env vars
const { argv } = yargs(process.argv)
// init fetch to reddit api
const res = await fetch('https://www.reddit.com/.json')
const data = await res.json()
const randomIndex = Math.floor(Math.random() * data.data.children.length)
// get radom post from reddit api response of all posts on front page
const post = data.data.children[randomIndex]

// log if --print flag is passed
if (argv.print) {
  console.log(`
    Title: ${post.data.title}\n
    Link: ${post.data.permalink}
  `)
} else {
  // open in browser if not
  open(`https://reddit.com${post.data.permalink}`)
}
```

With just a few lines of JS we were able to create a really powerful CLI with room for improvement. Like adding more options via flags. Even adding sub commands.

`npm init -y` skip all options

#### What is a BIN?

The NodeJS interpreter is installed in some folder called bin. You can think of **bin** is the folder where all your CLI's get installed, all your global commands they get installed in a bin folder.

## 10. Building a Reddit CLI

`console.log(process.argv)` It returns an array, the first two things are always gonna be the path to the interpreter which is **NodeJS**, and then a path to the CLI, whic is reddit, and everything else after that it's gonna be like arguments and flags

`reddit hello --print`

```bash
[
  '/home/elfgod/.nvm/versions/node/v16.13.0/bin/node',
  '/home/elfgod/.nvm/versions/node/v16.13.0/bin/reddit',
  'hello',
  '--print'
]
```

`reddit print` or `print -p` it will print the reddit post in the console
`reddit` it will open the reddit post in the browser
`node test.js` it will print the big object formatted

## Section 05: Servers

## 11. Creating a Low-Level Server

**folder 09 - Low Level Server**

NodeJS has access to OS level functionality, like networking tools. This allows us to build very capable servers. Mixed with the fact that NodeJS is single threaded and runs an even loop for async tasks, NodeJS is widely used for API's that need to respond fast and don't require heavy CPU intensive work.

#### Node Threads

A lot of people use Node, because it is JavaScript, but it does have access to the OS-level things. But also because when it comes to APIs and stuff, Node is single threaded.

A thread is a block, so you have a CPU with 8 cores, you could think of 1 thread taking up 1 core. So you can do 8 different things at once if you took up all 8 cores, whereas JavaScript only ever take 1 of those cores, 1 of those threads. And it basically uses an event loop, which has a different worker thread separate from the thread that your code is working on. And it will schedule different things. And it will just keep looping over and over to see if some work needs to be done. And when that work is done, it'll basically notify you when it's done with a callback, which can be translated to a promise, which can be translated to async/await.

So this basically allows us to continue receiving requests from our users and our customers at the same time we're scheduling more work to be done and process in the background.

Whereas other languages, it's blocking. So you might have requests coming in and they're being processed in kinda like a serial manner. That doesn't mean they're slow. they're not slow, they just are blocking, they have to have access to muliple threads.

The other thing is Node can have access to multiple threads. just by default, it doesn't, but you could use that specific node module, or even a third party module is probably a better than using the internal one, to actually spawn different amounts of work into different threads.

Which is perfect for something like load balancing when you're deplyiong a server somewhere. So it's a manual thing that you have to set up, and you have to manage that yourself. It is not managed via Node like other languages are, so just keep mind of that.

#### The hard way

NodeJS ships with the http module. This module is an abstraction around OS level networking tools. For NodeJS , the http module would be considered "low level". Let's create a simple server.

```javascript
import http from 'http'

const host = 'localhost'
const port = 8000

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = ''

    req.on('data', (chunk) => {
      body += chunk.toString()
    })

    req.on('end', () => {
      if (req.headers['content-type'] === 'application/json') {
        body = JSON.parse(body)
      }

      console.log(body)
      res.writeHead(201)
      res.end('ok')
    })
  } else {
    res.writeHead(200)
    res.end('hello from my server')
  }
})

localhost: server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`)
})
```

**Closing the server ctrl + c**

Using the **createServer** method on the http module, we create a server. Before we start the server, we need to make sure it can handle incoming requests. That's the callback inside of **createServer**. Next is starting the server. To do that, we need a port and a host. Sites default to port **8080** or **8000** so it's not uncommon to use that when developing locally. The host is going to be your machine, which is **localhost** or **127.0.0.1**.

Using the **http** module is fine for this small example, but for bulding real world APIs we should utilize the community and install some packages to help up with this task.

### ExpressJS

There is an awesome packaged, **express**, that makes creating servers in Node.js a breeze. We're going to use it now.

`npm install express body-parser morgan`

- express - a framework for building servers
- body-parser - a middleware that parses incoming requests
- morgan - a middleware for logging incoming requests

With everything installed, we'll create a simple API for a todo app using express.

```javascript
import express from 'express'
import morgan from 'morgan'
import bp from 'body-parser'

const { urlencoded, json } = bp

const db = {
  todos: [],
}

const app = express()

app.use(urlencoded({ extended: true }))
app.use(json())
app.use(morgan('dev'))

app.get('/todo', (req, res) => {
  res.json({ data: db.todos })
})

app.post('/todo', (req, res) => {
  const newTodo = { complete: false, id: Date.now(), text: req.body.text }
  db.todos.push(newTodo)

  res.json({ data: newTodo })
})

app.listen(8000, () => {
  console.log('Server on http://localhost:8000')
})
```

Compared to the native **http** module, express feels like cheating.

Our todo API has two routes:

- **GET /todo** - get all todos
- **POST /todo** - create a new todo

Express has a healthy community with tons of plugins and middleware to help you build out API's.

## 12.  Testing an API with HTTPie

**https://httpie.io/** : HTTPie -- command-line HTTP client for the API era


If i don't put anything else, it'll just do a **GET** request to the blank URL
```bash
# Doing a GET
http localhost:8000
http :8000
```

Doing a **POST** request  
Creating an object with a color field and a food field
```bash
# Doing a POST
http POST :8000 color=red food=pizza
```