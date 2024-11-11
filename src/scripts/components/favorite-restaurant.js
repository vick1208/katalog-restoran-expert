class FavoriteRestaurant extends HTMLElement{
  connectedCallback(){
    this._render();
  }
  _render(){
    this.innerHTML = `
        <h2>Daftar Restoran Favorit Anda</h2>
        <div>
          <input id="inputQuery" type="search" placeholder="Cari Restoran yang Anda Suka"/>
          <input id="submitSearch" type="submit" value="Cari"/>
        </div>
        <div id="restaurants" class="restaurants"></div>
        `;
  }

}

customElements.define('favorite-restaurant', FavoriteRestaurant);