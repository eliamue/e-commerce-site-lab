// import functions and grab DOM elements
import candles from './candles.js';
import { renderCandles } from './render-candles.js';

const li = document.getElementById('candles');

for (let i = 0; i < candles.length; i++) {
    const candle = candles[i];
    const dom = renderCandles(candle);
    li.appendChild(dom);
}