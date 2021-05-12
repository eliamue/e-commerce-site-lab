
import renderCandles from './render-candles.js';
import candles from '../candles.js';

// have to have HTML anchor to append things to show up on the page
const anchor = document.getElementById('candles');

// for each candle
for (let item of candles) {
    // create a div
    const candleDiv = renderCandles(item);

    // append it to anchor
    anchor.append(candleDiv);
}