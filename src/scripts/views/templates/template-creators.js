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
                <p class="itemRating">Rating: <a href="#/detail/${restaurant.id}" class="link__rating">${restaurant.rating} <i class="fa-solid fa-star" aria-hidden="true"></i></a></p>
            </div>
        </div>
`;

const createDetailTemplate = (restaurant) => `
    <h2 class="detail__title">Informasi ${restaurant.name}</h2>
    <div class="restaurant__detail">
        <div class="detail__header">
            <img src="${CONFIG.BASE_URL_IMAGES + restaurant.pictureId}" alt="${restaurant.name}"/>
            <div class="detail__headerContent">
                <h2>${restaurant.name}</h2>
                <h3>${restaurant.address}</h3>
                <h4>${restaurant.city}</h4>
                <p>${restaurant.description}</p>
            </div>
        </div>
        <div class="detail__menu">
            <h2>Daftar Menu ${restaurant.name}</h2>
            <div class="detail__menuGroup">
                <div class="detail__foodMenu">
                    <h3>Menu Makanan</h3>
                    <table>
                        <tbody id="foodMenu"></tbody>
                    </table>
                </div>
                <div class="detail__drinkMenu">
                    <h3>Daftar Menu Minuman</h3>
                    <table>
                        <tbody id="drinkMenu"></tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="detail__review">
            <h2>Review Pelanggan</h2>
            <div id="reviewPost" class="review__post"></div>
        </div>
        <div class="detail__postReview">
            <h2>Post your review</h2>
            <form class="postReview__form">
                <div class="form__group">
                    <label for="inputName">Nama Anda</label>
                    <input id="inputName" class="form__control" type="text" minlength=2 placeholder="Masukkan Nama Anda" required/>
                </div>
                <div class="form__group">
                    <label for="inputReview">Review Anda</label>
                    <textarea id="inputReview" class="form__control" placeholder="Masukkan Review Anda" minlength=25 required></textarea>
                </div>
                <div class="form__group">
                    <button id="submitReview" class="form__submit">Tambahkan Review</button>
                </div>
            </form>
        </div>
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