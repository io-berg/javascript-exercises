const reverseString = function(str) {
    let reveresed = '';
    
    for (let i = str.length - 1; i >= 0; i--)
    {
        reveresed += str[i];
    }

    return reveresed;
};

// Do not edit below this line
module.exports = reverseString;
