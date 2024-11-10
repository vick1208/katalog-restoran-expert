class FooterSection extends HTMLElement{
  connectedCallback(){
    this.render();
  }

  render(){
    this.innerHTML = `
        <p class="footer__content">
            Copyright &copy; <span id="year">date</span> - Bon Appétit
        </p>
        `;
  }
}

customElements.define('footer-section', FooterSection);