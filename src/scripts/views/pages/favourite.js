import FavouriteRestaurant from '../../data/favourite-restaurant';
import FavoriteRestoView from './liked-resto/favorite-resto-view';

const view = new FavoriteRestoView();

const Favourite = {
  async render(){
    return view.getViewTemplate();
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

    try {
      const { default: search } = await import('./liked-resto/favorite-resto-search');
      new search({
        view,
        favoriteRestaurants: FavouriteRestaurant,
      });
    } catch (error) {
      console.error(error);
    }
  },

  _hideHero(){
    const heroEl = document.querySelector('hero-section');
    heroEl.style.display = 'none';
  }

};

export default Favourite;