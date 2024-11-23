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
    await this._checkData();
  },

  _showHero(){
    const heroEl = document.querySelector('hero-section');
    heroEl.style.display = 'flex';
  },

  async _checkData(){
    const restaurants = await RestaurantDbSource.restaurantsList();
    const restaurantList = document.querySelector('#restaurants');

    if (restaurants.length > 0) {
      restaurants.forEach((resto) => {
        restaurantList.innerHTML += createItemsTemplate(resto);
      });
    } else {
      restaurantList.innerHTML += `
      <div class="restaurant-item__not__found">
        <p>
            Daftar Restoran Tidak Ditemukan.
        </p>
      </div>
      `;
    }
  }
};

export default Home;