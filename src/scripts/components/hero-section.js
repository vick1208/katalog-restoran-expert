class HeroSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="hero__container">
            <div class="hero__inner">
            <h1 class="hero__title">Temukan Rasa yang Anda Cari</h1>
            <p class="hero__tag">Cari restoran favorit Anda disini</p>
            </div>
        </div>
        `;
  }
}

customElements.define('hero-section', HeroSection);

