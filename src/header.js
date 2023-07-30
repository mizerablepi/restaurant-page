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
  }
  
}

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