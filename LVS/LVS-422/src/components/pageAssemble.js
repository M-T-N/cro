import { qs,qsa } from "../utils/qs";
import { stickyHighlights } from "./stickyHighlights";
import { bottomDetails } from "./bottomDetails";
import { offersColumn } from "./offersColumn";
import { cleanup } from "./cleanup";

export function pageAssemble() {

  // move the dropdown and FAQ into the T&C's section below (needs to run before offersColumn)
  bottomDetails();


  // add sticky sidebar (desktop only)
  qs('.offer-details__flexible').innerHTML = `
    ${offersColumn()}
    ${stickyHighlights()}
  `;

  // after page assembly, remove elements that have been cloned
  cleanup();

}