class NavBar extends HTMLElement{
  connectedCallback(){
    this._render();
  }

  _render(){
    this.innerHTML = `
    <div class="header__container">
      <p>
        <a href="/" class="nav__logo">Bon Appétit</a>
      </p>

      <div class="hamburger">
        <button id="hamburger" aria-label="menu">
          <svg class="hb" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 18L20 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            <path d="M4 12L20 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            <path d="M4 6L20 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
          </svg>
        </button>
      </div>
      
      <nav class="navbar" id="drawer">
        <ul class="nav__list">
          <li class="nav__item"><a href="#/home">Home</a></li>
          <li class="nav__item"><a href="#/favorite">Favorite</a></li>
          <li class="nav__item"><a href="https://github.com/vick1208" target="_blank" rel="noreferrer">About Us</a></li>
        </ul>
      </nav>


    </div>
    `;
  }
}

customElements.define('nav-bar', NavBar);