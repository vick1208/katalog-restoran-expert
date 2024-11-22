import FavouriteRestaurant from '../src/scripts/data/favourite-restaurant';
import createLikeButtonPresenterWithResto from './helpers/testFactories';

describe('Liking A Restaurant', () => {

  const addFavButtonContainer = () => {
    document.body.innerHTML = '<div id="favouriteButtonContainer"></div>';
  };

  beforeEach(() => {
    addFavButtonContainer();
  });


  it('should show the like button when the restaurant has not been liked before', async () => {

    await createLikeButtonPresenterWithResto({ id: 1 });

    expect(document.querySelector('[aria-label="favorite this restaurant"')).toBeTruthy();
  });
  it('should not show the like button when the restaurant has not been liked before', async () => {

    await createLikeButtonPresenterWithResto({ id: 1 });


    expect(document.querySelector('[aria-label="unfavorite this restaurant"')).toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await createLikeButtonPresenterWithResto({ id: 1 });
    document.querySelector('#favouriteButton').dispatchEvent(new Event('click'));

    // memastikan resto sukses disukai
    const restaurant = await FavouriteRestaurant.getRestaurant(1);
    expect(restaurant).toEqual({ id: 1 });

    await FavouriteRestaurant.deleteRestaurant(1);
  });

  it('should not add a restaurant again if it is already liked', async () => {
    await createLikeButtonPresenterWithResto({ id: 2 });

    // Tambahkan restaurant dengan ID 2 ke daftar restaurant yang disukai
    await FavouriteRestaurant.putRestaurant({ id: 2 });

    // Simulasi menekan tombol like/favorite restoran
    document.querySelector('#favouriteButton').dispatchEvent(new Event('click'));

    // Tidak ada data restoran yang ganda
    expect(await FavouriteRestaurant.getAllRestaurants()).toEqual([{ id: 2 }]);

    await FavouriteRestaurant.deleteRestaurant(2);
  });

  it('should not add a restaurant data when it does not have an id', async () => {
    await createLikeButtonPresenterWithResto({ });

    document.querySelector('#favouriteButton').dispatchEvent(new Event('click'));

    expect(await FavouriteRestaurant.getAllRestaurants()).toEqual([]);
  });
});