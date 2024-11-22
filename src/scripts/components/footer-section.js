import { html, css, LitElement } from 'lit';

class FooterSection extends LitElement{


  static styles = css `
    .footer__content {
      text-align: center;
      color: #fafafa;
    }
  `;

  static properties = {
    year:{},
  };

  constructor(){
    super();
    this.year = 2000;
  }


  render(){

    const date = new Date();
    this.year = date.getFullYear();

    return html `
    <p class="footer__content">
            Copyright &copy; ${this.year} - Bon Appétit
    </p>
    `;
  }
}

customElements.define('footer-section', FooterSection);