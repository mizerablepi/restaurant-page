import dishImage from './images/food-top.png'
import restaurantImage from './images/pexels-rachel-claire-6126306.jpg'

let homeSection = document.createElement('div');

let homeHero = document.createElement('div');
homeHero.classList.add('home-hero');

let leftHero = document.createElement('div');
leftHero.classList.add('left-hero');

let heroTitle = document.createElement('span');
heroTitle.textContent = 'Enjoy Your Healthy Delicious Food';
heroTitle.classList.add('hero-title');
let heroSubtitle = document.createElement('span');
heroSubtitle.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti harum dolores eius dolor facere consectetur in, aut voluptatibus aliquam saepe dignissimos doloremque dicta ";
heroSubtitle.classList.add('hero-subtitle');
let heroBtns = document.createElement('div');
let book = document.createElement('button');
book.textContent = 'Book a Table';
book.classList.add('book');
let link = document.createElement('a');
link.setAttribute('href', '');
link.textContent = 'Read the Menu';
heroBtns.append(book, link);

leftHero.append(heroTitle, heroSubtitle, heroBtns);

let rightHero = document.createElement('img');
rightHero.setAttribute('src', dishImage);

homeHero.append(leftHero, rightHero);

let about = document.createElement('div');
about.classList.add('about');

let aboutTitle = document.createElement('div');
aboutTitle.classList.add('about-title');
aboutTitle.innerHTML = 'A <span id="enjoy">Perfect Place </span>to Enjoy';

let aboutMain = document.createElement('div');
aboutMain.classList.add('about-main');

let aboutImage = document.createElement('img');
aboutImage.setAttribute('src', restaurantImage);

let aboutText = document.createElement('div');
aboutText.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti harum dolores eius dolor facere consectetur in, aut voluptatibus aliquam saepe dignissimos doloremque dicta enim obcaecati recusandae veniam tempora, veritatis quo!";
aboutText.classList.add("about-text");

let aboutList = document.createElement('ul');
aboutList.innerHTML = "<li>Has Delicious Food</li><li>Has Good Beverages</li><li>Has Scenic View</li>"

let aboutSummary = document.createElement('span');
aboutSummary.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, fugit. Perferendis, amet repudiandae. Earum impedit alias aliquid obcaecati, eius provident qui nulla vel ducimus itaque nam numquam ";
aboutText.append(aboutList,aboutSummary);

aboutMain.append(aboutImage, aboutText);

about.append(aboutTitle, aboutMain);

homeSection.append(homeHero, about);
export { homeSection };