// Imports
import { qs, qsa } from './utils/qs';
import poll from './utils/poll';
import styles from './styles/v2.scss';
import { css } from './components/css2';
import { pageAssemble } from './components/pageAssemble2';


// Polyfills
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}


function init() {

  // css
  css();

  // page assemble
  pageAssemble();
  
}


// Initialize experiment
poll('.glide__slides li.glide__slide:last-child', init);