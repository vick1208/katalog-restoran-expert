import FavoriteMovieView from '../src/scripts/views/pages/liked-resto/favorite-resto-view';
import FavoriteRestoShow from '../src/scripts/views/pages/liked-resto/favorite-resto-show';

describe('Showing all favorite restaurants', () => {
  let view;

  const renderTemplate = () => {
    view = new FavoriteMovieView();
    document.body.innerHTML = view.getTemplate();
  };

  beforeEach(() => {
    renderTemplate();
  });

  describe('When no restaurants have been liked', () => {
    it('should ask for the favorite restaurants', () => {
      const favoriteRestaurants = {
        getAllRestaurants: jest.fn().mockImplementation(() => []),
      };

      new FavoriteRestoShow({
        view,
        favoriteRestaurants
      });


      expect(favoriteRestaurants.getAllRestaurants).toHaveBeenCalledTimes(1);
    });
  });
});