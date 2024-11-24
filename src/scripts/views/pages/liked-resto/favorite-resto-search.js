class FavoriteRestoSearch{
  constructor({ view, favoriteRestaurants }) {
    this._favoriteRestaurants = favoriteRestaurants;
    this._view = view;

    this._listenToUserSearch();
  }

  _listenToUserSearch(){
    this._view.runWhenUserIsSearching((latestQuery) => {
      this._searchRestaurants(latestQuery);
    });
  }

  async _searchRestaurants(latestQuery){
    this._latestQuery = latestQuery.trim();

    let foundRestaurants;
    if (this._latestQuery.length > 0) {
      foundRestaurants = await this._favoriteRestaurants.searchRestaurants(this._latestQuery);
    } else {
      foundRestaurants = await this._favoriteRestaurants.getAllRestaurants();
    }

    this._showFoundRestaurants(foundRestaurants);

  }

  _showFoundRestaurants(restaurants){
    this._view.showFavoriteRestaurants(restaurants);
  }

  get latestQuery(){
    return this._latestQuery;
  }
}

export default FavoriteRestoSearch;