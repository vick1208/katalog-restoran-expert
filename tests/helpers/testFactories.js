import FavouriteButtonInitiator from '../../src/scripts/utils/favourite-button-initiator';
import FavouriteRestaurant from '../../src/scripts/data/favourite-restaurant';

const createLikeButtonPresenterWithResto = async (restaurant) => {
  await FavouriteButtonInitiator.init({
    favouriteButtonContainer: document.querySelector('#favouriteButtonContainer'),
    favouriteRestaurants: FavouriteRestaurant,
    restaurant
  });
};

export default createLikeButtonPresenterWithResto;
