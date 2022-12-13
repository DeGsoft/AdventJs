function distributeGifts(packOfGifts, reindeers) {
    return Math.trunc(reindeers.reduce((acc, cur) =>
        acc + cur.length * 2, 0)
        / packOfGifts.reduce((acc, cur) =>
            acc + cur.length, 0));
}