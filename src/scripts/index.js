import 'regenerator-runtime'; /* for async await transpile */
import '../scss/main.scss';
import '../scss/media.scss';
import './components/nav-bar';
import './components/hero-section';
import './components/footer-section';
import './components/restaurant-list';
import './components/favorite-restaurant';
import App from './views/app';

// document.addEventListener('DOMContentLoaded', () => {
//   const hamburger = document.getElementById('hamburger');
//   const navList = document.querySelector('.nav__list');

//   hamburger.addEventListener('click', (e) => {
//     e.stopPropagation();
//     navList.classList.toggle('open');
//   });


// });




const app = new App({
  button: document.getElementById('hamburger'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#mainContent')
});

window.addEventListener('hashchange', ()=>{
  app.renderPage();
});

window.addEventListener('load', () =>{
  app.renderPage();
});




const yearElement = document.getElementById('year');
const date = new Date();

yearElement.innerText = date.getFullYear();

// local data
// const obj = await import('../public/data/DATA.json');
// const content = obj.default;
// const data = content.restaurants;

// let listContent = '';
// data.forEach((item) => {
//   listContent += `
//         <div class="item">
//             <div>
//                 <img class="itemPicture" src="${item.pictureId}" alt="${item.name}" title="${item.name}">
//             </div>
//             <p class="itemCity">${item.city}</p>
//             <div class="itemDesc">
//                 <h2><a href="#">${item.name}</a></h2>
//                 <div>
//                     <p class="textDesc">${item.description}</p>
//                 </div>
//                 <p class="itemRating">Rating: <a href="#" class="link__rating">${item.rating} &#x2B50;</a></p>
//             </div>
//         </div>`;
// });
// document.querySelector('#mainRestaurant').innerHTML = listContent;


