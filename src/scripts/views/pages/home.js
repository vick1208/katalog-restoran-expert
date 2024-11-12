import RestaurantDbSource from '../../data/restaurantdb-source';
import { createItemsTemplate } from '../templates/template-creators';
const Home = {
  async render(){
    return `
        <restaurant-list></restaurant-list>
        `;
  },
  async afterRender(){

    this._showHero();

    const restaurants = await RestaurantDbSource.restaurantsList();
    const restaurantList = document.querySelector('#restaurants');

    restaurants.forEach((resto) => {
      restaurantList.innerHTML += createItemsTemplate(resto);
    });
  },

  _showHero(){
    const heroEl = document.querySelector('hero-section');
    heroEl.style.display = 'flex';
  }
};

export default Home;