import FavouriteRestaurant from '../data/favourite-restaurant';
import { createFavouriteButtonTemplate, createUnfavouriteButtonTemplate } from '../views/templates/template-creators';

const FavouriteButtonInitiator = {
  async init({ favouriteButtonContainer, restaurant }) {
    this._favouriteButtonContainer = favouriteButtonContainer;
    this._restaurant = restaurant;
    console.log(this._favouriteButtonContainer);
    console.log(this._restaurant);

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;
    console.log(id);

    if (await this._isRestoExisted(id)) {
      this._renderFavorited();
    } else {
      this._renderFavorite();
    }
  },

  async _isRestoExisted(id) {
    const restaurant = await FavouriteRestaurant.getRestaurant(id);
    return !!restaurant;
  },

  _renderFavorite() {
    this._favouriteButtonContainer.innerHTML = createUnfavouriteButtonTemplate();

    const favoriteButton = document.querySelector('#favouriteButton');
    favoriteButton.addEventListener('click', async () => {
      await FavouriteRestaurant.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  _renderFavorited() {
    this._favouriteButtonContainer.innerHTML = createFavouriteButtonTemplate();

    const favoriteButton = document.querySelector('#favouriteButton');
    favoriteButton.addEventListener('click', async () => {
      await FavouriteRestaurant.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },



};

export default FavouriteButtonInitiator;