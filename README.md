# The Complete React V8

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
- **filename** Like **__dirname**, it too is relative to the file it's written in. A **String** value that points the the file name
- **process** A swiss army knife global. An **Object** that contains all the context you need about the current program being executed. Things from env vars, to what machine you're on
- **exports module require** These globals are used for creating and exposing modules throughout your app. We'll get to modules in a second 🌈

#### The rest
Depending on what version on Node.js you're running, there are so many more globals. Not as many as the Browser, but enough that you'll probably never use many of them. Check them out :link: [here](https://nodejs.org/api/globals.html).
