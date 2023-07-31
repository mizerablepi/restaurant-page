import { header } from './header.js';
import { homeSection } from './home.js';
import { footer } from './footer.js';

let body = document.getElementsByTagName('body')[0];
let content = document.getElementById('content');

body.insertBefore(header, content);
content.appendChild(homeSection);
body.appendChild(footer);
