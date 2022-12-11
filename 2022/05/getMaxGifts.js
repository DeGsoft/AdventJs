function getMaxGifts(giftsCities, maxGifts, maxCities) {
  if (maxGifts < 1 && giftsCities.length < 1 && maxCities < 1) return 0;
  return Math.max(...giftsCities
    .reduce((subsets, value) => subsets.concat(
      subsets.map(set => [value, ...set])
      ), [[]])
      .filter(subsets => subsets.length <= maxCities)
      .map(set =>
        set.reduce((acc, cur) => acc + cur, 0))
        .filter(sum => sum <= maxGifts));
}