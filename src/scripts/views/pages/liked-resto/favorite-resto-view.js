import { createItemsTemplate } from '../../templates/template-creators';

class FavoriteRestoView{
  getDisplayTemplate(){
    return `
      <favorite-restaurant></favorite-restaurant>
    `;
  }

  runWhenUserIsSearching(callback){
    document.getElementById('queryResto').addEventListener('change', (e) => {
      callback(e.target.value);
    });
  }

  showFavoriteRestaurants(restaurants){
    let html;
    const restoContainer = document.getElementById('restaurants');
    if (restaurants.length) {
      html = restaurants.reduce((carry, resto) => carry.concat(createItemsTemplate(resto)), '');
    } else {
      html = this._getEmptyRestaurantTemplate();
    }

    restoContainer.innerHTML = html;
    restoContainer.dispatchEvent(new Event('resto:updated'));
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