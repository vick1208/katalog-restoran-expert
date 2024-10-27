import 'regenerator-runtime'; /* for async await transpile */
// import file scss
import '../scss/main.scss'
import '../scss/media.scss'

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navList = document.querySelector(".nav__list");

    hamburger.addEventListener("click", function (e) {
        e.stopPropagation();
        navList.classList.toggle('open');
    });

    document.addEventListener("click", function (e) {
        if (!navList.contains(e.target) && e.target !== hamburger) {

            navList.classList.remove("open");
        }
    });
});




const yearElement = document.getElementById('year')
let date = new Date();

yearElement.innerText = date.getFullYear();

let obj = await import('../public/data/DATA.json');
const content = obj.default;
const data = content.restaurants;

let listContent = ``;
data.forEach(function (item) {
    listContent += `
        <div class="item">
            <div>
                <img class="itemPicture" src="${item.pictureId}" alt="${item.name}" title="${item.name}">
            </div>
            <p class="itemCity">${item.city}</p>
            <div class="itemDesc">
                <h2><a href="#">${item.name}</a></h2>
                <div>
                    <p class="textDesc">${item.description}</p>
                </div>
                <p class="itemRating">Rating: <a href="#" class="link__rating">${item.rating} &#x2B50;</a></p>
            </div>
        </div>`
})
document.querySelector('#mainRestaurant').innerHTML = listContent;


