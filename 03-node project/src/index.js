//ES6 (recomendada)
import {getTitle, getAuthor} from './functions.js'
import {curso} from './objects.js'
import {config} from 'dotenv'
import env from 'env-var'

//.env
config()

//env-var
const port = env.get('PORT').required().asIntPositive();

//Como se usaba Legacy:
// const {getTitle, getAuthor} = require('./functions')
// const {curso} = require('./objects')

console.log(getTitle() + getAuthor('Sergie Code'))
console.log(curso)
console.log(port)
console.log(process.env.db_user)
console.log(process.env.db_user_password)
