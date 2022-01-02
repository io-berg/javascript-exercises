const getTheTitles = function(arr) {

    let titles = [];

    arr.forEach(e => {
        titles.push(e.title)
    });

    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
