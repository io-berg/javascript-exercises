const findTheOldest = function(people) {
    const today = (new Date()).getFullYear();
    let newPeople = Array.from(people);

    newPeople.sort((p1,p2) => {
        if(!p1.yearOfDeath) p1.yearOfDeath = today;
        if(!p2.yearOfDeath) p2.yearOfDeath = today;
        let p1age = p1.yearOfDeath - p1.yearOfBirth;
        let p2age = p2.yearOfDeath - p2.yearOfBirth;

        return p1age > p2age ? -1 : 1;
    });

    return newPeople[0];
};

// Do not edit below this line
module.exports = findTheOldest;
