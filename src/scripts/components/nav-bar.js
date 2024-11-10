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
          <svg class="hb" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" stroke="currentColor" stroke-width=".6" fill="rgba(0,0,0,0)" stroke-linecap="round" style="cursor: pointer">
           <path d="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7">
            <animate dur="0.2s" attributeName="d" values="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7;M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7" fill="freeze" begin="start.begin" />
            <animate dur="0.2s" attributeName="d" values="M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7;M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7" fill="freeze" begin="reverse.begin" />
           </path>
          <rect width="10" height="10" stroke="none">
            <animate dur="2s" id="reverse" attributeName="width" begin="click" />
          </rect>
        <rect width="10" height="10" stroke="none">
          <animate dur="0.001s" id="start" attributeName="width" values="10;0" fill="freeze" begin="click" />
          <animate dur="0.001s" attributeName="width" values="0;10" fill="freeze" begin="reverse.begin" />
        </rect>
          </svg>

        </button>
      </div>
      
      <nav class="navbar" id="drawer">
        <ul class="nav__list">
          <li class="nav__item"><a href="/">Home</a></li>
          <li class="nav__item"><a href="#">Favorite</a></li>
          <li class="nav__item"><a href="https://www.linkedin.com/in/vicky-alex/" target="_blank" rel="noreferrer">About Us</a></li>
        </ul>
      </nav>


    </div>
    `;
  }
}

customElements.define('nav-bar', NavBar);