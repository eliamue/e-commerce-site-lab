
import renderCandles from './render-candles.js';
import candles from '../candles.js';

// we need an HTML anchor to append things to so they show up on the page
const anchor = document.getElementById('candles');

// for each animal
for (let item of candles) {
    // create a div for that animal
    const candleDiv = renderCandles(item);

    // and append it to our anchor
    anchor.append(candleDiv);
}