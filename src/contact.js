import mapIcon from './images/map.png';
import mailIcon from './images/mail.png';
import phoneIcon from './images/call.png';
import openIcon from './images/open.png';

function createCard(img, title, subtitle) {
  let card = document.createElement('div');
  card.classList.add('card');

  let cardLeft = document.createElement('img');
  cardLeft.setAttribute('src', img);

  let cardRight = document.createElement('div');
  cardRight.classList.add('card-right');
  
  let cardTitle = document.createElement('p');
  cardTitle.textContent = title;

  let cardSubtitle = document.createElement('span');
  cardSubtitle.innerHTML = subtitle;

  cardRight.append(cardTitle,cardSubtitle);

  card.append(cardLeft, cardRight);
  return card;
}

function createFormField(labelName, id, textarea = '') {
  let input = document.createElement('div');
  input.classList.add('field');
  let inputLabel = document.createElement('label');
  inputLabel.setAttribute('for', id);
  inputLabel.textContent = labelName;
  let inputField;
  if (textarea == '') {
    inputField = document.createElement('input');
    inputField.setAttribute('type', 'text');
  } else {
    inputField = document.createElement('textarea');
    inputField.setAttribute('rows', '10');
  }
  inputField.setAttribute('name', id);
  inputField.setAttribute('id', id);

  input.append(inputLabel, inputField);
  return input;
}

let contactSection = document.createElement('div');

let contactTitle = document.createElement('div');
contactTitle.classList.add('contact-title');
contactTitle.innerHTML = "Need Help? <span>Contact Us</span>";

let infoGrid = document.createElement('div');
infoGrid.classList.add('info-grid');

infoGrid.append(
  createCard(mapIcon, 'Our Address', 'A111 Purple Street, Old York, OY 123456'),
  createCard(mailIcon, 'Email Us', 'contact@frypan.com'),
  createCard(phoneIcon, 'Call Us', '+91 8425069122'),
  createCard(openIcon,'Opening Hours', '<b>Mon-Sat: </b>11AM-23PM; <b>Sunday: </b> Closed')
);

let infoForm = document.createElement('form');
infoForm.classList.add('info-form');

let formTopRow = document.createElement('div');
formTopRow.classList.add('form-top-row');
formTopRow.append(createFormField('Name: ', 'name'), createFormField('Email: ', "email"));

let subjectField = createFormField('Subject: ', "subject");
let messageField = createFormField('Message: ', "message", 'textarea');

infoForm.append(formTopRow, subjectField, messageField);

contactSection.append(contactTitle,infoGrid,infoForm);
export { contactSection };