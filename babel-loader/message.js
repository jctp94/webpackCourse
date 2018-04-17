import render from './render-to-dom.js';
import makeMessage from './make-message.js';
const waitTime = new Promise ((allOk,allBad)=> {
    setTimeout(()=> {
        allOk('3 seconds have passed');
    },3000)
});

module.exports = {
    firstMessage: 'Hi world from a module',
    delayedMessage: async () => {
        const message = await waitTime;
        render(makeMessage(message));
    }
}