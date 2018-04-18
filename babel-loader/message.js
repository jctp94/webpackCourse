import render from './render-to-dom.js';
import test from './make-message.js';
const waitTime = new Promise ((allOk,allBad)=> {
    setTimeout(()=> {
        allOk('3 seconds have passed');
    },3000)
});
let m = new test();
module.exports = {
    firstMessage: 'Hi world from a module',
    delayedMessage: async () => {
        const message = await waitTime;
        render(await m.makeMessage(message));
    }
}