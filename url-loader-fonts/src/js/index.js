import '../css/style.css';
import {firstMessage,delayedMessage} from './message.js';
import platziImg from '../img/platzi.png';

delayedMessage();
document.write(firstMessage);

console.log("Hi world from webpack");
const img = document.createElement('img');
img.setAttribute('src',platziImg);
img.setAttribute('width',50);
img.setAttribute('height',50);
document.body.append(img);
