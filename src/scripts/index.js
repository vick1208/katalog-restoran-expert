import 'regenerator-runtime'; /* for async await transpile */
// import file css
import '../styles/main.css'
import '../styles/media.css'





console.log("OK");

const yearElement = document.getElementById('year')
let date = new Date();

yearElement.innerText = date.getFullYear();

let obj = await import('../public/data/DATA.json');
const content = obj.default;
const data = content.restaurants;
console.log(data);

let listContent = ``;
data.forEach(function (item) {
    listContent += `
        <div class="item">
            <div>
                <img class="itemPicture" src="${item.pictureId}" alt="${item.name}" title="${item.name}">
            </div>
            <p class="itemCity">${item.city}</p>
            <div class="itemDesc">
                <h1><a href="#">${item.name}</a></h1>
                <div>
                    <p>${item.description.slice(0, 150)}...</p>
                </div>
                <p class="itemRating">Rating: <a href="#" class="link__rating">${item.rating} &#x2B50;</a></p>
            </div>
        </div>`
})
document.querySelector('#mainRestaurant').innerHTML = listContent;


