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

      searchResto('film a');

      expect(favoriteRestaurants.searchRestaurants).toHaveBeenCalledWith('film a');
    });
  });
});