import { spyOn } from 'jest-mock';
import FavoriteRestoSearch from '../src/scripts/views/pages/liked-resto/favorite-resto-search';
import FavouriteRestaurant from '../src/scripts/data/favourite-restaurant';
import FavoriteRestoView from '../src/scripts/views/pages/liked-resto/favorite-resto-view';

describe('Searching restaurants', () => {
  let presenter;
  let favoriteRestaurants;
  let view;

  const searchResto = (query) => {
    const queryElement = document.getElementById('queryResto');
    queryElement.value = query;

    queryElement.dispatchEvent(new Event('change'));
  };

  const setRestoSearchContainer = () => {
    view = new FavoriteRestoView();
    document.body.innerHTML = view.getTemplate();
  };

  const constructPresenter = () => {
    favoriteRestaurants = {
      getAllRestaurants: jest.fn(),
      searchRestaurants: jest.fn(),
    };
    spyOn(FavouriteRestaurant, 'searchRestaurants');
    presenter = new FavoriteRestoSearch({
      favoriteRestaurants,
      view
    });
  };

  beforeEach(() => {
    setRestoSearchContainer();
    constructPresenter();
  });
  describe('When query is not empty', () => {
    it('should be able to capture the user\'s query', () => {
      favoriteRestaurants.searchRestaurants.mockImplementation(() => []);
      searchResto('resto a');

      expect(presenter.latestQuery).toEqual('resto a');
    });

    it('should ask the model to search for liked restaurants', () => {
      favoriteRestaurants.searchRestaurants.mockImplementation(() => []);

      searchResto('resto a');

      expect(favoriteRestaurants.searchRestaurants).toHaveBeenCalledWith('resto a');
    });

    it('should show the restaurants data found', (done) => {
      document.getElementById('restaurants').addEventListener('resto:updated', () => {
        expect(document.querySelectorAll('.item-resto').length).toEqual(3);

        done();
      });

      favoriteRestaurants.searchRestaurants.mockImplementation((query) => {
        if (query === 'resto a') {
          return [
            { id: 111, name: 'resto a' },
            { id: 222, name: 'ada juga resto abc' },
            { id: 333, name: 'ini juga ada resto alpabet' },
          ];
        }

        return [];
      });

      searchResto('resto a');
    });

    it('should show restaurant\'s name found by Favorite Restaurants', (done) => {
      document.getElementById('restaurants').addEventListener('resto:updated', () => {
        const restaurantNames = document.querySelectorAll('.restaurant__name');
        expect(restaurantNames.item(0).textContent).toEqual('resto a');
        expect(restaurantNames.item(1).textContent).toEqual('ada juga resto abc');
        expect(restaurantNames.item(2).textContent).toEqual('ini juga ada resto alpabet');
        done();
      });
      favoriteRestaurants.searchRestaurants.mockImplementation((query) => {
        if (query === 'resto a') {
          return [
            { id: 111, name: 'resto a' },
            { id: 222, name: 'ada juga resto abc' },
            { id: 333, name: 'ini juga ada resto alpabet' },
          ];
        }

        return [];
      });

      searchResto('resto a');
    });

    it('should show restaurant name when the restaurant returned does not contain a name', (done) => {
      document.getElementById('restaurants').addEventListener('resto:updated', () => {
        const restaurantNames = document.querySelectorAll('.restaurant__name');
        expect(restaurantNames.item(0).textContent).toEqual('restaurant name');

        done();
      });

      favoriteRestaurants.searchRestaurants.mockImplementation((query) => {
        if (query === 'resto a') {
          return [{ id: 444 }];
        }

        return [];
      });

      searchResto('resto a');
    });
  });

  describe('When query is empty value', () => {
    it('should capture the query as empty', () => {
      favoriteRestaurants.getAllRestaurants.mockImplementation(() => []);

      searchResto(' ');
      expect(presenter.latestQuery.length).toEqual(0);
      searchResto('   ');
      expect(presenter.latestQuery.length).toEqual(0);
      searchResto('');
      expect(presenter.latestQuery.length).toEqual(0);
      searchResto('\t');
      expect(presenter.latestQuery.length).toEqual(0);
      searchResto('\t\t');
      expect(presenter.latestQuery.length).toEqual(0);

    });
    it('should show list of restaurants', () => {
      favoriteRestaurants.getAllRestaurants.mockImplementation(() => []);
      searchResto('\t    \t');
      expect(favoriteRestaurants.getAllRestaurants).toHaveBeenCalledTimes(1);
    });


  });

  describe('When no favorite restaurants found', () => {
    it('should show the empty message', (done) => {
      document.getElementById('restaurants').addEventListener('resto:updated', () => {
        expect(document.querySelectorAll('.restaurant-item__not__found').length).toEqual(1);
        done();
      });

      // favoriteRestaurants.searchRestaurants.mockImplementation((query) => []); sama saja dengan mock di bawah
      favoriteRestaurants.searchRestaurants.mockImplementation(() => []);
      searchResto('resto a');
    });

    it('should not show any restaurants', (done) => {
      document.getElementById('restaurants').addEventListener('resto:updated', () => {
        expect(document.querySelectorAll('.item-resto').length).toEqual(0);
        done();
      });

      favoriteRestaurants.searchRestaurants.mockImplementation(() => []);
      searchResto('resto a');
    });
  });
});