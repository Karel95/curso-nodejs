//file system
const fs = require('fs');

console.log(fs)

//readFileSync()
const poema = fs.readFileSync('poema.txt','utf-8')

console.log(poema)

//writeFileSync()
fs.writeFileSync('nuevoPoema.txt',poema.toUpperCase())
const nuevoPoema = fs.readFileSync('nuevoPoema.txt','utf-8')

console.log(nuevoPoema)

//replace()
const poemaModified = nuevoPoema.replace(/Sigue/ig, 'continua')
fs.writeFileSync('poemaModified.txt',poemaModified)

console.log(poemaModified)


