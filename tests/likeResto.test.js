import FavouriteButtonInitiator from '../src/scripts/utils/favourite-button-initiator';

describe('Giving A Like Restaurant', () => {
  it('should show the like button when the restaurant has not been liked before', async () => {
    document.body.innerHTML = '<div id="favouriteButtonContainer"></div>';

    await FavouriteButtonInitiator.init({
      favouriteButtonContainer: document.querySelector('#favouriteButtonContainer'),
      restaurant:{
        id: 22,
      },
    });


    expect(document.querySelector('[aria-label="favorite this restaurant"')).toBeTruthy();
  });
  it('should not show the like button when the restaurant has not been liked before', async () => {
    document.body.innerHTML = '<div id="favouriteButtonContainer"></div>';

    await FavouriteButtonInitiator.init({
      favouriteButtonContainer: document.querySelector('#favouriteButtonContainer'),
      restaurant:{
        id: 22,
      },
    });


    expect(document.querySelector('[aria-label="unfavorite this restaurant"')).toBeFalsy();
  });
});