// import functions and grab DOM elements
import candles from './products/candles.js';
import { renderCandles } from './products/render-candles.js';

const li = document.getElementById('candles');

for (let i = 0; i < candles.length; i++) {
    const candle = candles[i];
    const dom = renderCandles(candle);
    li.appendChild(dom);
}

export function findById(myArray, id) {
    for (let item of myArray) {
    // check if the first thing in the array has an id that matches the id from the parameter
        if (id === item.id) {
        // if the ids match, return that object
            return item;
        }
    // otherwise, try it out with the next object in the array
    }

    // if you never find a match, return null;
    return null;
}