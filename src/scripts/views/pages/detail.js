import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantdb-source';
import { createDetailTemplate } from '../templates/template-creators';
import FavouriteButtonInitiator from '../../utils/favourite-button-initiator';


const Detail = {
  async render(){
    return `
    <div id="restaurantDetail"></div>
    <div id="favoriteButtonContainer"></div>
    `;
  },

  async afterRender(){
    this._hideHero();

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDbSource.restaurantDetail(url.id);
    const restaurantContainer = document.querySelector('#restaurantDetail');
    restaurantContainer.innerHTML = createDetailTemplate(restaurant);
    // const reviewSubmitBtn = document.querySelector('#submitReview');

    // reviewSubmitBtn.addEventListener('click',(e) => {
    //   e.stopPropagation();

    // }),

    FavouriteButtonInitiator.init({
      FavouriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      restaurant
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

};


export default Detail;