const o = {
  u: {
    l: { course: 'NodeJS', a: { b: {} } },
  },
}

// Object is to deep so it will print [object]
// console.log(o);

// This will print the big object with one line
// console.log(JSON.stringify(o));

// 2 is how many indent spaces you want, it won't be nice and beautiful and colored
// but it'll be formatted and it'll show every single thing all the way down
console.log(JSON.stringify(o, null, 2))
