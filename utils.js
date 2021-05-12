export default function findById(candles, id) {
    for (let candle of candles) {
    // check if the first thing in the array has an id that matches the id from the parameter
        if (id === candle.id) {
        // if the ids match, return that object
            return candle;
        }
    // otherwise, try it out with the next object in the array
    }
    // if you never find a match, return null;
    return null;
}