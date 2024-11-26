import 'regenerator-runtime'; /* for async await transpile */
import '../styles/scss/main.scss';
import '../styles/scss/media.scss';
import '../styles/scss/loading.scss';
// import '../styles/main.css';
// import '../styles/media.css';
// import '../styles/loading.css';
import './components/index';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import swRegister from './utils/sw-register';


import('./views/app')
  .then(({ default: appClass }) => {

    const app = new appClass({
      button: document.getElementById('hamburger'),
      drawer: document.querySelector('#drawer'),
      content: document.querySelector('#mainContent')
    });

    window.addEventListener('hashchange', () => {
      app.renderPage();
    });


    window.addEventListener('load', async () => {
      app.renderPage();
      await swRegister();
      document.querySelector('loading-overlay').classList.add('hide__loading');
    });


  })
  .catch((error) => {
    console.error(error);
  });

