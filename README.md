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

If you're not on windows or you are using WSL, I recommend using installing NodeJS with nvm (node version manager). NVM allows you to install many The Complete React V8
FrontEnd Masters
Teacher: Scott Moss
Course website:
https://intro-to-nodejs-v2-site.vercel.app/

Repos:
Course repo:
Course examples repo:
Section 01: Introduction
1. Installing NodeJS
What is NodeJS
Node.js is a runtime for built on top of Chrome's V8. It allows you to develop apps in JavaScript outside of the browser. It's single threaded non blocking and asynchronous. This is acheived by the use of an event loop at the core of Node.js. If you know JS then you already know how to develop with Node.js, kinda...

JavaScript is single threaded, as in, it's only going to be able to process work and amount of work in one little isolated instance and then everything else kinda runs in the background. This allow Node to be able to process things much faster than a lot of other OS level languages, as long as those tasks are not CPU bound. So if you're not doing things like arithmetic or AI or machine learning, NodeJS is probably a perfect tool for you because it can handle things and put them in the background and continue to stay open to handle incoming requests and things like that

So that's why it's a very popular tool because it kind allows you to scale a lot faster for smaller tasks like API's, which are like 90% of back end apps these days anyway.

Use cases
Because NodeJS can run outside of the browser, it can be used for pretty much anything!

API's and servers
Databases (yes some DB's are built in Node)
CLI's
Build Tools
Automations
Basic Scripting
GPU shopping bots 👀
Installing NodeJS
For Windows
If you're running windows and not using WSL, I recommend you use the official installer from the NodeJS site. Choose the latest LTS version.

For everyone else
versions of Node.js at once and switch when you need. Also, NVM installs NodeJS in a folder that will not have permission errors that you would otherwise run into with the official installer.

https://github.com/nvm-sh/nvm

Once you have nvm installed, you need to install a Node version. You can download the latest LTS version with this command.

This is gonna install the latest version for you, so you don't have to figure out which one it is.
``nvm install --lts``
