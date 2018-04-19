import '../css/style.css';
import {firstMessage,delayedMessage} from './message.js';
import platziImg from '../img/platzi.png';
import Data from './teachers.json';
import renderTodom from './render-to-dom'

console.log(Data);

Data.teachers.forEach(teacher => {
    const element = document.createElement('li');
    element.textContent = teacher.name;
    renderTodom(element);
});

delayedMessage();
document.write(firstMessage);

console.log("Hi world from webpack");
const img = document.createElement('img');
img.setAttribute('src',platziImg);
img.setAttribute('width',50);
img.setAttribute('height',50);
document.body.append(img);
