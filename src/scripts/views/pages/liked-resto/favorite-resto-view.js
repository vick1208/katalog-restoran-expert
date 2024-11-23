import { createItemsTemplate } from '../../templates/template-creators';

class FavoriteRestoView{
  getTemplate(){
    return `
      <div class="mainContent__title">
        <h2>Favorite Restaurants</h2>
      </div>
      <div class="inputSearch">
        <input id="queryResto" type="search"/>
      </div>
      <div id="restaurants" class="restaurants">
      </div> 
    `;
  }

  getViewTemplate(){
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
      // restoContainer.classList.add('visible__items');
      // restoContainer.classList.remove('notFound_items');
    } else {
      html = this._getEmptyRestaurantTemplate();
      restoContainer.classList.add('notFound_items');
      // restoContainer.classList.remove('visible__items');
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