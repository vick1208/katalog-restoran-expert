import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantdb-source';
import { createDetailTemplate } from '../templates/template-creators';
import FavouriteButtonInitiator from '../../utils/favourite-button-initiator';


const Detail = {
  async render(){
    return `
    <div id="restaurantDetail"></div>
    <div id="favouriteButtonContainer"></div>
    `;
  },

  async afterRender(){
    this._hideHero();

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDbSource.restaurantDetail(url.id);
    const restaurantContainer = document.querySelector('#restaurantDetail');
    restaurantContainer.innerHTML = createDetailTemplate(restaurant);
    const reviewSubmitBtn = document.querySelector('#submitReview');

    FavouriteButtonInitiator.init({
      favouriteButtonContainer: document.querySelector('#favouriteButtonContainer'),
      restaurant:{
        id: restaurant.id,
        name: restaurant.name,
        city: restaurant.city,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating,
      }
    });

    this._menu(restaurant);
    this._review(restaurant);



    reviewSubmitBtn.addEventListener('click', (e) => {
      e.stopPropagation();

    });

  },

  _hideHero(){
    const heroEl = document.querySelector('hero-section');
    heroEl.style.display = 'none';
  },
  _menu(restaurant) {
    const foodMenu = document.querySelector('#foodMenu');
    const drinkMenu = document.querySelector('#drinkMenu');

    const { foods, drinks } = restaurant.menus;

    foods.forEach((food) => {
      foodMenu.innerHTML += `
        <tr>
          <td>${food.name}</td>
        </tr>
      `;
    });

    drinks.forEach((drink) => {
      drinkMenu.innerHTML += `
        <tr>
          <td>${drink.name}</td>
        </tr>
      `;
    });
  },

  _review(restaurant){

    const { customerReviews } = restaurant;
    const reviewPost = document.getElementById('reviewPost');
    customerReviews.forEach((item) => {
      reviewPost.innerHTML += `
      <div class="review__card">
        <h2 class="review__title">${item.review}</h2>
        <p class="review__sender">${item.name}</p>
        <p class="review__date">${item.date}</p>
      </div>
      `;
    });

  }

};


export default Detail;