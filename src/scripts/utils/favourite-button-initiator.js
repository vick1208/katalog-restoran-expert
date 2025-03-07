import { createFavouriteButtonTemplate, createUnfavouriteButtonTemplate } from '../views/templates/template-creators';

const FavouriteButtonInitiator = {
  async init({ favouriteButtonContainer, favouriteRestaurants, restaurant }) {
    this._favouriteButtonContainer = favouriteButtonContainer;
    this._favouriteRestaurants = favouriteRestaurants;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestoExisted(id)) {
      this._renderFavorited();
    } else {
      this._renderFavorite();
    }
  },

  async _isRestoExisted(id) {
    const restaurant = await this._favouriteRestaurants.getRestaurant(id);
    return !!restaurant;
  },

  _renderFavorite() {
    this._favouriteButtonContainer.innerHTML = createFavouriteButtonTemplate();

    const favoriteButton = document.querySelector('#favouriteButton');
    favoriteButton.addEventListener('click', async () => {
      await this._favouriteRestaurants.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  _renderFavorited() {
    this._favouriteButtonContainer.innerHTML = createUnfavouriteButtonTemplate();

    const favoriteButton = document.querySelector('#favouriteButton');
    favoriteButton.addEventListener('click', async () => {
      await this._favouriteRestaurants.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },



};

export default FavouriteButtonInitiator;