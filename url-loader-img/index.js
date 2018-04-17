import platziImg from './platzi.png';
import './style.css';
import {firstMessage,delayedMessage} from './message.js';

delayedMessage();
document.write(firstMessage);

console.log("Hi world from webpack");
const img = document.createElement('img');
img.setAttribute('src',platziImg);
img.setAttribute('width',50);
img.setAttribute('height',50);
document.body.append(img);
