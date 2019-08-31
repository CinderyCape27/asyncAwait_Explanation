// Archivos del progama
const { taskOne, taskTwo } = require('./task')
async function main() {
    console.time('Measuring time');
    const valueOne = await taskOne();
    const valueTwo = await taskTwo();
    console.timeEnd('Measuring time')

    console.log('Task One returned' + valueOne);
    console.log('Task Two returned' + valueTwo);
    
}
main()


