class NavBar extends HTMLElement{
  connectedCallback(){
    this._render();
  }

  _render(){
    this.innerHTML = `<div>
    
    
    </div>`;
  }
}

customElements.define('nav-bar', NavBar);