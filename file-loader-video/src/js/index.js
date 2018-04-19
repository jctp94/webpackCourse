import '../css/style.css';
import {firstMessage,delayedMessage} from './message.js';
import platziImg from '../img/platzi.png';
import videoPlatzi from '../video/que-es-core.mp4'

delayedMessage();
document.write(firstMessage);

console.log("Hi world from webpack");
const img = document.createElement('img');
img.setAttribute('src',platziImg);
img.setAttribute('width',50);
img.setAttribute('height',50);
document.body.append(img);

const video = document.createElement('video');
video.setAttribute('src',videoPlatzi);
video.setAttribute('width',480);
video.setAttribute('autoplay',true);
video.setAttribute('controls',true);
document.body.append(video);
