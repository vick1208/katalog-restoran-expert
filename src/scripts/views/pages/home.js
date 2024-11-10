import RestaurantDbSource from '../../data/restaurantdb-source';
import { createItemsTemplate } from '../templates/template-creators';
const Home = {
  async render(){
    return `
        <restaurant-list></restaurant-list>
        `;
  },
  async afterRender(){
    const restaurants = await RestaurantDbSource.restaurantsList();
    const restaurantList = document.querySelector('#restaurants');

    if (restaurants.length > 0) {

      restaurants.forEach((resto) => {
        restaurantList.innerHTML += createItemsTemplate(resto);
      });

    } else {
      const emptyArrayErr = document.querySelector('favorite-restaurant');
      emptyArrayErr.innerHTML += `
            <div>
                <p>
                    Daftar Restoran Tidak Ditemukan.
                </p>
            </div>`;
    }
  }
};

export default Home;