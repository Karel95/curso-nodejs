const {envs} = require('./config/env.js');

const main = () => {
    console.log(envs)
}

//funcion agnostica:
//(()=>{})

//funcion agnostica autoejecutada:
//(()=>{})()

//funcion agnostica asincrona autoejecutada:
//(async()=>{})()

(async()=>{
    main()
})()

