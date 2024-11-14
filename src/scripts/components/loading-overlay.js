class LoadingOverlay extends HTMLElement{
  connectedCallback(){
    this._render();
  }

  _render(){
    this.innerHTML = `
        <div id="loading" class="loading__overlay">
            <div class="loader"></div>
            <p>Loading page...</p>
        </div>
        `;
  }
}




customElements.define('loading-overlay', LoadingOverlay);