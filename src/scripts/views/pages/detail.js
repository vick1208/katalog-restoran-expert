const Detail = {
  async render(){
    return `
    <div id="restaurantDetail"></div>
    <div id="favoriteButtonContainer"></div>
    `;
  },

  async afterRender(){
    this._hideHero();
  },

  _hideHero(){
    const heroEl = document.querySelector('hero-section');
    heroEl.style.display = 'none';
  }

};


export default Detail;