import FavouriteRestaurant from '../../data/favourite-restaurant';
// import { createItemsTemplate } from '../templates/template-creators';
import FavoriteRestoView from './liked-resto/favorite-resto-view';

const view = new FavoriteRestoView();

const Favourite = {
  async render(){
    return view.getTemplate() ;
  },

  async afterRender(){

    this._hideHero();

    try {
      const { default: show } = await import('./liked-resto/favorite-resto-show');
      new show({
        view,
        favoriteRestaurants: FavouriteRestaurant,
      });
    } catch (error) {
      console.error(error);
    }


    // const restaurants = await FavouriteRestaurant.getAllRestaurants();
    // const restaurantContainer = document.querySelector('#restaurants');

    // if (restaurants.length > 0) {
    //   restaurants.forEach((restaurant)=>{
    //     restaurantContainer.innerHTML +=  createItemsTemplate(restaurant);
    //   });
    // } else {
    //   const emptyArrayErr = document.querySelector('favorite-restaurant');
    //   emptyArrayErr.innerHTML += `
    //         <div class="restaurant-item__not__found">
    //             <p>
    //                 Daftar Restoran Tidak Ditemukan.
    //             </p>
    //         </div>`;
    // }
  },

  _hideHero(){
    const heroEl = document.querySelector('hero-section');
    heroEl.style.display = 'none';
  }

};

export default Favourite;