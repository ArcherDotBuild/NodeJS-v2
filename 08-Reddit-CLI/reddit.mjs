#! /usr/bin/env node

// console.log('hello world from reddit CLI');

import fetch from 'node-fetch'
import open from 'open'
import yargs from 'yargs'

// console.log(process.argv);

// This is going to be an object with whatever flags was passed in
const { argv } = yargs(process.argv)

// Making a call to reddit, https://reddit.com/.json
// We actually get the JSON output of the entire front page of reddit

// Fetch actually doesn't return the data, it returns a response object that has a status code, error messages, etc
// and if we want the data from that we have to resolve the promise of turning it into JSON
const res = await fetch('https://reddit.com/.json')
const data = await res.json()
// console.log(data)

// Getting a random post
const children = data.data.children
const randomPost = children[Math.floor(Math.random() * children.length)]
const link = `https://reddit.com${randomPost.data.permalink}`
// Decide if we need to open this post in the browser,
// or if we just wanna print out something about it

if (argv.print || argv.p) {
  console.log(`
  title: ${randomPost.data.title},
  link: ${link}
  `)
} else {
  open(link)
}
