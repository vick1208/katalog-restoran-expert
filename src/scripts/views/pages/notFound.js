const NotFound = {
  async render(){
    return `
        <div class="page__not-found">
            <p class="message__not-found">
            Sorry the page you are looking for is not found.
            </p>
        </div>
        `;
  },
  async afterRender(){
    this._hideHero();
  },
  _hideHero(){
    const heroEl = document.querySelector('hero-section');
    heroEl.style.display = 'none';
  },
};

export default NotFound;