import { homeSection } from './home.js';
import { menuSection } from './menu.js';
import { contactSection } from './contact.js';
import './style.css';

function createButton(text, className = '') {
  let btn = document.createElement('button');
  btn.textContent = text;
  if (className != '') {
    btn.classList.add(className);
  }
  return btn;
}

function setToSelected(event) {
  if (event.target.tagName == 'BUTTON') {
    document.getElementsByClassName('selected')[0].classList.remove('selected');
    event.target.classList.add('selected');

    if (event.target.textContent == 'Home') {
      content.replaceChildren();
      content.appendChild(homeSection);
    }else if (event.target.textContent == 'Menu') {
      content.replaceChildren();
      content.appendChild(menuSection);
    } else {
      content.replaceChildren();
      content.appendChild(contactSection);
    }

  }
}

let content = document.getElementById('content');

let header = document.createElement('header');

let logo = document.createElement('div');
logo.classList.add('logo');
logo.textContent = 'FryPan';

let uScore = document.createElement('span');
uScore.textContent = '_';
uScore.id = 'uscore';
logo.appendChild(uScore);

let tab = document.createElement('div');
tab.classList.add('tab');
tab.addEventListener('click', setToSelected);
let home = createButton('Home', 'selected');
let menu = createButton('Menu');
let contact = createButton('Contact Us');
tab.append(home, menu, contact);

let booking = document.createElement('div');
let book = createButton('Book a Table', 'book');
booking.appendChild(book);

header.append(logo,tab,booking);

export { header };