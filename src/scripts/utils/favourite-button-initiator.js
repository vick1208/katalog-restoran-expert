import FavouriteRestaurant from '../data/favourite-restaurant';
import { createFavouriteButtonTemplate, createUnfavouriteButtonTemplate } from '../views/templates/template-creators';

const FavouriteButtonInitiator = {

  async init({ FavouriteButtonContainer, restaurant }){
    this._favouriteButtonContainer = FavouriteButtonContainer;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton(){
    const { id } = this._restaurant ;

    if (await this._isRestoExisted(id)) {
      this._renderFavorited();
    } else {
      this._renderFavorite();
    }
  },

  async _isRestoExisted(id){
    const restaurant = await FavouriteRestaurant.getRestaurant(id);
    return !!restaurant;
  },

  _renderFavorite() {
    this._favoriteButtonContainer.innerHTML = createFavouriteButtonTemplate();

    const favoriteButton = document.querySelector('#favouriteButton');
    favoriteButton.addEventListener('click', async () => {
      await FavouriteRestaurant.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  _renderFavorited() {
    this._favoriteButtonContainer.innerHTML = createUnfavouriteButtonTemplate();

    const favoriteButton = document.querySelector('#favouriteButton');
    favoriteButton.addEventListener('click', async () => {
      await FavouriteRestaurant.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },



};

export default FavouriteButtonInitiator;