import 'regenerator-runtime'; /* for async await transpile */
import '../scss/main.scss';
import '../scss/media.scss';
import '../scss/loading.scss';

import './components/index';
import swRegister from './utils/sw-register';


const { default: appClass } = await import('./views/app');

const app = new appClass({
  button: document.getElementById('hamburger'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#mainContent')
});



window.addEventListener('hashchange', ()=>{
  app.renderPage();
});


window.addEventListener('load', async () =>{
  app.renderPage();
  await swRegister();
  document.querySelector('loading-overlay').classList.add('hide__loading');
});

const yearElement = document.getElementById('year');
const date = new Date();

yearElement.innerText = date.getFullYear();
