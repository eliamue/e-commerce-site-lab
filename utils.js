export default function findById(candles, idYo) {
    for (let candle of candles) {
    // check if the first thing in the array has an id that matches the id from the parameter
        if (idYo === candle.id) {
        // if the ids match, return that object
            return candle;
        }
    }
    // if you never find a match, return null;
    return null;
}