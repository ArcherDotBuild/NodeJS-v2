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

Node.js is a runtime for built on top of Chrome's V8. It allows you to develop apps in JavaScript outside of the browser. It's single threaded non blocking and asynchronous. This is acheived by the use of an event loop at the core of Node.js. If you know JS then you already know how to develop with Node.js, kinda...

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

versions of Node.js at once and switch when you need. Also, NVM installs NodeJS in a folder that will not have permission errors that you would otherwise run into with the official installer.

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

- **global** Think of this as like **window** but for Node.js. DON'T ABUSE IT!
- **dirname** This global is a **String** value that points the the directory name of the file it's used in.
- **filename** Like **\_\_dirname**, it too is relative to the file it's written in. A **String** value that points the the file name
- **process** A swiss army knife global. An **Object** that contains all the context you need about the current program being executed. Things from env vars, to what machine you're on
- **exports module require** These globals are used for creating and exposing modules throughout your app. We'll get to modules in a second 🌈

#### The rest

Depending on what version on Node.js you're running, there are so many more globals. Not as many as the Browser, but enough that you'll probably never use many of them. Check them out :link: [here](https://nodejs.org/api/globals.html).

## 4. Modules

How would we share or how would we include JavaScript in other JavaScript?

How modules are just consuming JavaScript in general and not just NodeJS.

There is no GUI in Node.js, no HTML or CSS. This also means there aren't any scipt tags to include JS files into our application. Node.js uses modules to to share your JavaScript with other JavaScript in your apps. No window or globals needed. If you've ever done `window.App = window.App || {}` then you'll like this!.

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

Until NodeJS, there wasn't a great way to access the file system on a machine with JavaScript, this is due to secutrity restrictions in most browsers. With NodeJS, one can create, edit, remote, read, strereadFileam, & more with files. If you've ever used a build tool like webpack or a parser like babel, then you realize just how powerful NodeJS can be when manipulating the file system.

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

