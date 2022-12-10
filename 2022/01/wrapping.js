function wrapping(gifts) {
    return gifts.map(function (gift) {
        const wrap = "*".repeat(gift.length) + "**";
        return wrap + "\n*" + gift + "*\n" + wrap;
    });
}