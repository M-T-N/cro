import { qs, qsa } from "../utils/qs";
import { stayDateTemplate } from "./stayDateTemplate";

export function offers(){

  const eachCard = qsa('.mod-offers-listing--item');

  /* Things to do to each card */
  eachCard.forEach(el => {

    // add divider line -- mobile
    el.querySelector('.o-offer__tagline').insertAdjacentHTML('afterend', `<span class="o-offer__divider o-offer__divider--mobile"></span>`);

    // add divider line -- desktop
    el.querySelector('.o-offer__tag-detail').insertAdjacentHTML('afterend', `<span class="o-offer__divider o-offer__divider--desktop"></span>`);

    // move 'view offer' button into div with 'book now'
    const viewOffer = el.querySelector('.o-offer__cta');
    el.querySelector('.mod-offers-listing__buttons').insertAdjacentHTML('beforeend', viewOffer.outerHTML);
    viewOffer.remove();

    // wrap other detail elements in div
    jQuery(el.querySelectorAll('.o-offer__text > *:not(.mod-offers-listing__buttons)')).wrapAll('<div class="o-offer__text--wrap"></div>');

    // remove any <p> in the text details
    el.querySelectorAll('.o-offer__text__collapsible > p').forEach(el => el.remove());

  });

  /*  Individual cards */
  function updateCards() {

    const upTo30 = document.querySelector('.mod-offers-listing--item a[href="/offers/advance-purchase-offer.html"]').parentElement;
    const exclusiveOnline = document.querySelector('.mod-offers-listing--item a[href="/offers/up-to-20-off-offer.html"]').parentElement;
    const mostPopular = document.querySelector('.mod-offers-listing--item a[href="/offers/featured-offer.html"]').parentElement;
    const f1Heineken = document.querySelector('.mod-offers-listing--item a[href="/offers/f1-ticket-package-offer.html"]').parentElement;
    const raceSuite = document.querySelector('.mod-offers-listing--item a[href="/offers/f1-suite-offer.html"]').parentElement;
    const racetrackView = document.querySelector('.mod-offers-listing--item a[href="/offers/f1-racetrack-view-suites-offer.html"]').parentElement;
    const book3nights = document.querySelector('.mod-offers-listing--item a[href="/offers/the-big-game-2024-offer.html"]').parentElement;


    
    // upTo30
    (() => {
      upTo30.querySelector('.o-offer__tagline').innerText = 'Advance Purchase';
      upTo30.querySelector('.o-offer__tag-detail').innerText = 'Up to 30% rates when you book 60 days in advance';

      const stayDates = '5/1/2023 – 12/31/2024';
      const bookBefore = 'At least 60 days in advance';
      const offerDetails = 'Join Grazie® Rewards for up to an additional 5% off. Must book at least 60 days in advance. Non-Cancellable / Non-Refundable. Full pre-payment of stay required.';
      upTo30.querySelector('.o-offer__text__collapsible > ul').outerHTML = stayDateTemplate(stayDates, bookBefore, offerDetails);

      // change image
      upTo30.querySelectorAll('source, img').forEach(function(el){
          el.srcset = 'https://www.venetianlasvegas.com/content/dam/venetian/resort/attractions/gondola-rides/outdoor-gondola-3_1200x800.jpg';
          el.dataset.srcset = 'https://www.venetianlasvegas.com/content/dam/venetian/resort/attractions/gondola-rides/outdoor-gondola-3_1200x800.jpg';
          el.dataset.src = 'https://www.venetianlasvegas.com/content/dam/venetian/resort/attractions/gondola-rides/outdoor-gondola-3_1200x800.jpg';
      });
    })();

    // exclusiveOnline
    (() => {
      exclusiveOnline.querySelector('.o-offer__tagline').innerText = 'Exclusive Online Savings';
      exclusiveOnline.querySelector('.o-offer__tag-detail').innerText = 'Up to 20% off with no nightly minimum stay';

      const stayDates = 'Through 12/31/2023';
      const bookBefore = '12/31/2023';
      const offerDetails = 'Join Grazie® Rewards for up to an additional 5% off. No nightly minimum stay.';
      exclusiveOnline.querySelector('.o-offer__text__collapsible > ul').outerHTML = stayDateTemplate(stayDates, bookBefore, offerDetails);
    })();

    // mostPopular
    (() => {
      mostPopular.querySelector('.o-offer__tagline').innerText = 'Most Flexible Rate';
      mostPopular.querySelector('.o-offer__tag-detail').innerText = 'Flexible 24-hour cancellation policy';

      mostPopular.querySelector('.o-offer__text__collapsible > ul').outerHTML = `
        <div class="o-offer__text__details">
          <div class="o-offer__text__details__item"><span class="bold">Offer Details:</span> Free Cancellations. Fully Refundable. Flexible 24-hour cancellation policy. No nightly minimum stay. Available at The Venetian and The Palazzo.</div>
        </div>
      `;

      // change image
      mostPopular.querySelectorAll('source, img').forEach(function(el){
        el.srcset = 'https://www.venetianlasvegas.com/content/dam/venetian/suites/venetian/luxury-king/king-bed-1_1200x800.jpg';
        el.dataset.srcset = 'https://www.venetianlasvegas.com/content/dam/venetian/suites/venetian/luxury-king/king-bed-1_1200x800.jpg';
        el.dataset.src = 'https://www.venetianlasvegas.com/content/dam/venetian/suites/venetian/luxury-king/king-bed-1_1200x800.jpg';
      });
    })();

    // f1Heineken
    (() => {
      f1Heineken.querySelector('.o-offer__tagline').innerText = 'FORMULA 1 HEINEKEN SILVER LAS VEGAS GRAND PRIX Ticket Package';

      const stayDates = 'Stay must include 11/18/2023';
      const bookBefore = 'Valid until 11/15/23 or sold out';
      const offerDetails = 'Grandstand tickets include food & non-alcoholic beverages each day. Tickets are non-transferable. After purchase, you will be contacted with additional details regarding your reservation. Three-night minimum length of stay required. Fully prepaid, non-refundable and non-cancellable.';
      f1Heineken.querySelector('.o-offer__text__collapsible > ul').outerHTML = stayDateTemplate(stayDates, bookBefore, offerDetails);
    })();

    // raceSuite
    (() => {
      raceSuite.querySelector('.o-offer__tag-detail').innerText = 'Elegant FORMULA 1 HEINEKEN SILVER LAS VEGAS GRAND PRIX Suites';

      const stayDates = 'Stay must include 11/18/2023';
      const bookBefore = 'Valid until 11/15/23 or sold out';
      const offerDetails = 'Grandstand tickets include food & non-alcoholic beverages each day. Tickets are non-transferable. After purchase, you will be contacted with additional details regarding your reservation. Three-night minimum length of stay required. Fully prepaid, non-refundable and non-cancellable.';
      raceSuite.querySelector('.o-offer__text__collapsible > ul').outerHTML = stayDateTemplate(stayDates, bookBefore, offerDetails);
    })();

    // racetrackView
    (() => {
      racetrackView.querySelector('.o-offer__tag-detail').innerText = 'Enjoy a Luxury Palazzo Suite with a view';

      const stayDates = 'Stay must include 11/18/2023';
      const bookBefore = 'Valid Until 11/15/23 or sold out';
      const offerDetails = 'Three-night minimum length of stay. Fully prepaid, non-refundable and non-cancellable.';
      racetrackView.querySelector('.o-offer__text__collapsible > ul').outerHTML = stayDateTemplate(stayDates, bookBefore, offerDetails);
    })();

    // book3nights
    (() => {
      book3nights.querySelector('.o-offer__tagline').innerText = 'The Big Game 2024 Offer';
      book3nights.querySelector('.o-offer__tag-detail').innerText = 'Get in on all the football action this February';

      const stayDates = '2/4/2024 – 2/16/2024';
      const bookBefore = '2/8/2024';
      const offerDetails = 'Experience the excitement of the Big Game when it arrives in Las Vegas in 2024. Three-night minimum length of stay. Fully prepaid, non-refundable and non-cancellable. Available at The Venetian and The Palazzo.';
      book3nights.querySelector('.o-offer__text__collapsible > ul').outerHTML = stayDateTemplate(stayDates, bookBefore, offerDetails);
    })();


  }

  updateCards();

}