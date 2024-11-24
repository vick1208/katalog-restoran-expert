import itActsAsFavouriteRestaurantModel from './contracts/favouriteRestoContract';
import FavouriteRestaurant from '../src/scripts/data/favourite-restaurant';

describe('Favourite Restaurant IndexDB Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavouriteRestaurant.getAllRestaurants()).forEach(async (resto) => {
      await FavouriteRestaurant.deleteRestaurant(resto.id);
    });
  });
  itActsAsFavouriteRestaurantModel(FavouriteRestaurant);
});