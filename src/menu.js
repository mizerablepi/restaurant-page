import item1Image from './images/pngwing.com.png';
import item2Image from './images/pngwing.com (1).png';
import item3Image from './images/pngwing.com (2).png';
import item4Image from './images/pngwing.com (3).png';
import item5Image from './images/food-top.png';

function createMenuItem(img, name, description, price) {
  let item = document.createElement('div');
  item.classList.add('item');

  let itemImage = document.createElement('img');
  itemImage.setAttribute('src', img);

  let itemName = document.createElement('div');
  itemName.classList.add('item-name');
  itemName.textContent = name;

  let itemDescription = document.createElement('div');
  itemDescription.classList.add('item-description')
  itemDescription.textContent = description;

  let itemPrice = document.createElement('div');
  itemPrice.classList.add('item-price');
  itemPrice.textContent = price;

  item.append(itemImage, itemName, itemDescription,itemPrice);
  return item;
}

let menuSection = document.createElement('div');
menuSection.classList.add('menu');

let menuTitle = document.createElement('div');
menuTitle.classList.add('menu-title');
menuTitle.textContent = 'Our Menu:';

let menuBody = document.createElement('div');
menuBody.classList.add('menu-body');

menuBody.append(
  createMenuItem(item3Image, "Beef Steak", "Beef, tomato, chilli, garlic", '$ 4.99'),
  createMenuItem(item4Image, "Mom's Spaghetti", "Spaghet, sauce, cheese, tomato", '$ 6.99'),
  createMenuItem(item2Image, "Simple Sandwich", "Bread, cheese, onion, ketchup", '$ 0.99'),
  createMenuItem(item5Image, "Chicken Meal", "Sliced chicken, tomato, chilli, pepper", '$ 42.99'),
  createMenuItem(item1Image, "Chicken & Omlette", "chicken, bread, tomato, Egg", '$ 2.99')
)

menuSection.append(menuTitle,menuBody);
export { menuSection };