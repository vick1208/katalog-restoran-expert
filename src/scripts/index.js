import 'regenerator-runtime'; /* for async await transpile */
// import file css
import '../styles/main.css'
import '../styles/media.css'





console.log("OK");

let module = await import('../public/data/DATA.json')
const content = module.restaurants;
console.log(content);

let listContent = ``;
content.forEach(function (data) {
    listContent += `
        <div class="item">
            <div>
                <img class="itemPicture" src="${data.pictureId}" alt="${data.name}" title="${data.name}">
            </div>
            <p class="itemCity">${data.city}</p>
            <div class="itemDesc">
                <h1><a href="#">${data.name}</a></h1>
                <div>
                    <p>${data.description.slice(0, 150)}...</p>
                </div>
                <p class="itemRating">Rating: <a href="#" class="link__rating">${data.rating} &#x2B50;</a></p>
            </div>
        </div>`
})
document.querySelector('#mainRestaurant').innerHTML = listContent;


