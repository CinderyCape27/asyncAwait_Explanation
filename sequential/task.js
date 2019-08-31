// simulacion de peticiones asyncronas
//Util hace lo mismo que setTimeOut() esta trase consigo una función llama promisify()
const util = require('util'); //convierte funciones que se manejan con callbacks a funiones que se puedan manejar con promesas o asyn await

const sleep = util.promisify(setTimeout)

module.exports = {
    
   async taskOne(){
    await sleep(4000);
    return 'One Value'
    },
   async taskTwo(){
    await sleep(2000);
    return 'Two Value'
    }
}