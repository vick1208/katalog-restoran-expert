class FavoriteRestaurant extends HTMLElement{
  connectedCallback(){
    this._render();
  }
  _render(){
    this.innerHTML = `
    <div class="mainContent__title">
      <h2>Favorite Restaurants</h2>
    </div>
    <div class="inputSearch">
      <input id="queryResto" class="search-bar__restaurant" type="search"/>
    </div>
    <div id="restaurants" class="restaurants"></div>
    `;
  }

}

customElements.define('favorite-restaurant', FavoriteRestaurant);