class RestaurantList extends HTMLElement{
  connectedCallback(){
    this._render();
  }
  _render(){
    this.innerHTML = `
        <h2>Explore Restaurants</h2>
        <div id="restaurants" class="restaurants">
        </div>
        `;
  }
}

customElements.define('restaurant-list', RestaurantList);