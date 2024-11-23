import { createItemsTemplate } from '../../templates/template-creators';

class FavoriteRestoView{
  getTemplate(){
    return `
      <div class="mainContent__title">
        <h2>Your Favorite Restaurant List</h2>
      </div>
      <div class="inputSearch">
        <input id="queryResto" type="search"/>
      </div>
      <div id="restaurants" class="restaurants">
      </div>
    `;
  }

  runWhenUserIsSearching(callback){
    document.getElementById('queryResto').addEventListener('change', (e) => {
      callback(e.target.value);
    });
  }

  showFavoriteRestaurants(restaurants){
    let html;
    if (restaurants.length) {
      html = restaurants.reduce((carry, resto) => carry.concat(createItemsTemplate(resto)), '');
    } else {
      html = this._getEmptyRestaurantTemplate();
    }

    document.getElementById('restaurants').innerHTML = html;
    document.getElementById('restaurants').dispatchEvent(new Event('resto:updated'));
  }


  _getEmptyRestaurantTemplate(){
    return `
    <div class="restaurant-item__not__found">
      <p>
          Daftar Restoran Tidak Ditemukan.
      </p>
    </div>
    `;
  }


}

export default FavoriteRestoView;