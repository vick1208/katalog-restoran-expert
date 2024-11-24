import itActsAsFavouriteRestaurantModel from './contracts/favouriteRestoContract';

let favRestaurants = [];

const FavoriteRestaurantArray = {
  getRestaurant(id){
    if (!id) {
      return null;
    }
    return favRestaurants.find((restaurant) => restaurant.id == id);
  },
  getAllRestaurants(){
    return favRestaurants;
  },
  putRestaurant(restaurant){
    // eslint-disable-next-line no-prototype-builtins
    if (!restaurant.hasOwnProperty('id')) {
      return null;
    }

    // pastikan id ini belum ada dalam list favRestaurants
    if (this.getRestaurant(restaurant.id)) {
      return null;
    }
    favRestaurants.push(restaurant);
  },
  deleteRestaurant(id){
    favRestaurants = favRestaurants.filter((restaurant) => restaurant.id != id);
  },
  searchRestaurants(query){
    return this.getAllRestaurants()
      .filter((restaurant) => {
        const restaurantTitle = (restaurant.name || '-').toLowerCase();
        const concatRestaurantTitle = restaurantTitle.replace(/\s/g, '');

        const searchQuery = query.toLowerCase();
        const concatQuery = searchQuery.replace(/\s/g, '');

        return concatRestaurantTitle.indexOf(concatQuery) !== -1;
      });
  }
};

describe('Favourite Restaurant Array Contract Test Implementation', () => {
  afterEach(() => {favRestaurants = [];});

  itActsAsFavouriteRestaurantModel(FavoriteRestaurantArray);
});