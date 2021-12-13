const repeatString = function(string, int) {

    if (int < 0) return 'ERROR';

    let out = '';
    for (let i = 0; i < int; i++){
        out += string;
    }
    return out;
};

// Do not edit below this line
module.exports = repeatString;
