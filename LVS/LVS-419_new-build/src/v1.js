// Imports
import { qs, qsa } from './utils/qs';
import poll from './utils/poll';
import styles from './styles/v1.scss';
import { css } from './components/css';
import { pageAssemble } from './components/pageAssemble';


// Polyfills
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

console.log('VEN-419_v1 Preload...');

function init() {

	console.log('VEN-419 Desktop v1');

  // css
  css();

  // page assemble
  pageAssemble();
  
}


// Initialize experiment
poll('.dashboard-offers__carousel .glide__bullets .glide__bullet--active', init);