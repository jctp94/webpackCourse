import './style.css';
import './style2.css';
import {firstMessage,delayedMessage} from './message.js';

console.log("Hi world from webpack");
delayedMessage();
document.write(firstMessage);