const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = document.querySelector('.gallery');

//  створюємо елементи списку
const firstGalleryItem = document.createElement("li");
firstGalleryItem.classList.add('gallery__item');

const secondGalleryItem = document.createElement("li");
secondGalleryItem.classList.add("gallery__item");

const thirdGalleryItem = document.createElement("li");
thirdGalleryItem.classList.add("gallery__item");

//  створюємо зображення для елементів списку
const firstImageEl = document.createElement("img");
firstImageEl.src = images[0].url;
firstImageEl.alt = images[0].alt;
firstImageEl.classList.add("gallery__image");

const secondImageEl = document.createElement("img");
secondImageEl.src = images[1].url;
secondImageEl.alt = images[1].alt;
secondImageEl.classList.add("gallery__image");

const thirdImageEl = document.createElement("img");
thirdImageEl.src = images[2].url;
thirdImageEl.alt = images[2].alt;
thirdImageEl.classList.add("gallery__image");

// додаємо зображення до елементів списку 
firstGalleryItem.appendChild(firstImageEl);

secondGalleryItem.appendChild(secondImageEl);

thirdGalleryItem.appendChild(thirdImageEl);

//  додаємо еелменти списку до списку і виводимо в консоль
galleryEl.append(firstGalleryItem, secondGalleryItem, thirdGalleryItem);
console.log(galleryEl);