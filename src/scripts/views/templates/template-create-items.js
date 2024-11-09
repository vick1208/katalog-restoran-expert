import CONFIG from '../../globals/config';

const createItemsTemplate = (restaurant) => `
    <div class="item">
            <div>
                <img class="itemPicture" src="${CONFIG.BASE_URL_IMAGES + restaurant.pictureId}" alt="${restaurant.name || 'restaurant picture'}">
            </div>
            <p class="itemCity">${restaurant.city}</p>
            <div class="itemDesc">
                <h2><a href="#/detail/${restaurant.id}">${restaurant.name || 'restaurant name'}</a></h2>
                <div>
                    <p class="textDesc">${restaurant.description}</p>
                </div>
                <p class="itemRating">Rating: <a href="#" class="link__rating">${restaurant.rating} <i class="fa-solid fa-star" style="color: #FFD43B;" aria-hidden="true"></i></a></p>
            </div>
        </div>
`;

const createDetailTemplate = (restaurant) => `

    <h2>${restaurant.name}</h2>
    <div class="item__detail">
    </div>

`;


const createFavouriteButtonTemplate = () => `
    <button aria-label="favourite this restaurant" id="favouriteButton" class="fav">
        <i class="fa-solid fa-heart" aria-hidden="true"></i>
    </button>
`;
const createUnfavouriteButtonTemplate = () => `
    <button aria-label="unfavourite this restaurant" id="favouriteButton" class="fav">
        <i class="fa-regular fa-heart" aria-hidden="true"></i>
    </button>
`;


export {
  createItemsTemplate,
  createDetailTemplate,
  createFavouriteButtonTemplate,
  createUnfavouriteButtonTemplate
};