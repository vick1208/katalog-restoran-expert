class RestaurantList extends HTMLElement{
  connectedCallback(){
    this._render();
  }
  _render(){
    this.innerHTML = `
      <div id="main" class="mainContent__title">
        <h2>Explore Restaurants</h2>
      </div>
        <div id="restaurants" class="restaurants">
        </div>
        `;
  }
}

customElements.define('restaurant-list', RestaurantList);