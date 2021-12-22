const palindromes = function (s) {
    let workString = s.toLowerCase();
    workString = workString.replace(/[,.;!:?\s]/g, "");
    console.log(workString);

    const slength = workString.length;

    for (let i = 0; i < slength / 2; i++) {
        if (workString[i] == workString[slength - i - 1])
            continue;
        
        return false;
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
