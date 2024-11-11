class ShowPresenter {
  constructor({ view, favouriteRestaurants }) {
    this._view = view;
    this._favouriteRestaurants = favouriteRestaurants;

    this._showFavoriteRestaurants();
  }

  async _showFavoriteRestaurants() {
    const restaurants = await this._favouriteRestaurants.getAllRestaurants();
    this._displayRestaurants(restaurants);
  }

  _displayRestaurants(restaurants) {
    this._view.showFavoriteRestaurants(restaurants);
  }
}

export default ShowPresenter;