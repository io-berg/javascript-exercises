const fibonacci = function(n) {
    if (n < 0) return "OOPS";

    let fibN = 0;
    let nextN = 1;

    for (let i = 0; i < n; i++) {
        let temp = nextN;
        nextN = fibN + nextN;
        fibN = temp;
    }

    return fibN;
};

// Do not edit below this line
module.exports = fibonacci;
