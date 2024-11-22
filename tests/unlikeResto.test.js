import FavouriteRestaurant from '../src/scripts/data/favourite-restaurant';
import createLikeButtonPresenterWithResto from './helpers/testFactories';

describe('Unliking A Restaurant', () => {
  const addFavButtonContainer = () => {
    document.body.innerHTML = '<div id="favouriteButtonContainer"></div>';
  };

  beforeEach(async () => {
    addFavButtonContainer();
    await FavouriteRestaurant.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavouriteRestaurant.deleteRestaurant(1);
  });

  it('should display unlike button when the restaurant has been liked', async () => {
    await createLikeButtonPresenterWithResto({ id: 1 });

    expect(document.querySelector('[aria-label="unfavorite this restaurant"]')).toBeTruthy();
  });

  it('should not display like button when the restaurant has been liked', async () => {
    await createLikeButtonPresenterWithResto({ id: 1 });

    expect(document.querySelector('[aria-label="favorite this restaurant"]')).toBeFalsy();
  });

  it('should be able to remove liked restaurant from favorite list', async () => {
    await createLikeButtonPresenterWithResto({ id: 1 });
    document.querySelector('[aria-label="unfavorite this restaurant"]').dispatchEvent(new Event('click'));
    expect(await FavouriteRestaurant.getAllRestaurants()).toEqual([]);
  });

  it('should not throw error when user click unlike button if the unliked restaurant is not in the list', async () => {
    await createLikeButtonPresenterWithResto({ id: 1 });
    // Hapus data restaurant
    await FavouriteRestaurant.deleteRestaurant(1);

    // Simulasi pengguna klik button batal
    document.querySelector('[aria-label="unfavorite this restaurant"]').dispatchEvent(new Event('click'));
    expect(await FavouriteRestaurant.getAllRestaurants()).toEqual([]);
  });
});