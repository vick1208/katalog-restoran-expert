import FavoriteRestoView from '../src/scripts/views/pages/liked-resto/favorite-resto-view';
import FavoriteRestoShow from '../src/scripts/views/pages/liked-resto/favorite-resto-show';

describe('Showing all favorite restaurants', () => {
  let view;

  const renderTemplate = () => {
    view = new FavoriteRestoView();
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

    it('should show the information that no restaurants have been liked', (done) => {
      document.getElementById('restaurants').addEventListener('resto:updated', () => {
        expect(document.querySelectorAll('.restaurant-item__not__found').length).toEqual(1);
        done();
      });

      const favoriteRestaurants = {
        getAllRestaurants: jest.fn().mockImplementation(() => []),
      };

      new FavoriteRestoShow({
        view,
        favoriteRestaurants
      });
    });
  });

  describe('When favorite restaurants exist', () => {
    it('should show all of the restaurants', (done) => {
      document.getElementById('restaurants').addEventListener('resto:updated', () => {
        expect(document.querySelectorAll('.item-resto').length).toEqual(2);
        done();
      });

      const favoriteRestaurants = {
        getAllRestaurants: jest.fn().mockImplementation(() => [
          {
            id: 12,
            name: 'Alpa',
            rating: 3.45,
            description: 'lorem ipsum',
          },
          {
            id: 17,
            name: 'Beta',
            rating: 8.45,
            description: 'lorem ipsum',
          },
        ]),
      };

      new FavoriteRestoShow({
        view,
        favoriteRestaurants,
      });
    });
  });
});