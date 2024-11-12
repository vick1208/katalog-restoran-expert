class FavoriteRestaurant extends HTMLElement{
  connectedCallback(){
    this._render();
  }
  _render(){
    this.innerHTML = `
    <div class="mainContent">
      <h2>Your Favorite Restaurant List</h2>
    </div>
        <div id="restaurants" class="restaurants"></div>
        `;
  }

}

customElements.define('favorite-restaurant', FavoriteRestaurant);