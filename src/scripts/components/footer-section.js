import { html, css, LitElement } from 'lit';


const date = new Date();

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
    this.year = date.getFullYear();
  }


  render(){
    return html `
    <p class="footer__content">
            Copyright &copy; ${this.year} - Bon Appétit
    </p>
    `;
  }
}

customElements.define('footer-section', FooterSection);