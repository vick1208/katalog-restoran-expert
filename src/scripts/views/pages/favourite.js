import FavouriteRestaurant from '../../data/favourite-restaurant';
import { createItemsTemplate } from '../templates/template-creators';

const Favourite = {
  async render(){
    return `
    <favorite-restaurant></favorite-restaurant>
    `;
  },

  async afterRender(){
    const restaurants = await FavouriteRestaurant.getAllRestaurants();
    const restaurantContainer = document.querySelector('#restaurants');

    restaurants.forEach((restaurant)=>{
      restaurantContainer.innerHTML +=  createItemsTemplate(restaurant);
    });
  }

};

export default Favourite;