import poll from './utils/poll';
import styles from './styles/v1.scss';
import { css } from './components/css';
import { pageAssemble } from './components/pageAssemble';

function init() {

    console.log('LVS-422');

    css();
  
    pageAssemble();

}

poll('.offer-details__terms-and-conditions', init);