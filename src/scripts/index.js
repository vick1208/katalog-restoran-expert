import 'regenerator-runtime'; /* for async await transpile */
import '../scss/main.scss';
import '../scss/media.scss';
import './components/nav-bar';
import './components/hero-section';
import './components/footer-section';
import './components/restaurant-list';
import './components/favorite-restaurant';
import App from './views/app';
import swRegister from './utils/sw-register';






const app = new App({
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
});




const yearElement = document.getElementById('year');
const date = new Date();

yearElement.innerText = date.getFullYear();



