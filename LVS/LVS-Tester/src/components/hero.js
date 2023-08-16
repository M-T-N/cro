import { qs } from "../utils/qs";
import { complimentaryNights } from "./variables";

export function hero() {

  // add complimentary nights text for desktop
  qs('.offers-hero__title').insertAdjacentHTML('afterend', `
    <div class="offers-hero__nights">
      <p>Get ${complimentaryNights} Complimentary Nights -- and More</p>
    </div>
  `);


}