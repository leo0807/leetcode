var maximumWealth = function (accounts) {
    return Math.max.apply(null, accounts.map((i) => i.reduce((a, b) => a + b, 0)));
};