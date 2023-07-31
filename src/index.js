import { header } from './header.js';
import { homeSection } from './home.js';

let body = document.getElementsByTagName('body')[0];
let content = document.getElementById('content');

body.insertBefore(header, content);
content.appendChild(homeSection);
