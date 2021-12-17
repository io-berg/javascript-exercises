const removeFromArray = function(arr, ...args) {

    for (let i = 0; i < arr.length; i++) {
        if (args.includes(arr[i]))
        {
            arr.splice(i, 1);
            i -= 1;
        }
    }
    
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
