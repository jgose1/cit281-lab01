// TODO Part 11: Import reverseString() and concatenateString()
// functions from lab-03-module.js module using require()
const { reverseString, concatenateString } = require('./lab-03-module.js');

// Declare a specific car object
let car = {
    make: "Ford",
    model: "Mustang",
    vin: "4S3BMHB68B3286050",
    color: "Red",
    year: 2019,
    mileage: 1234,
    used: true,
    owners: [
        { last: "Last1", first: "First1" },
        { last: "Last2", first: "First2" }
    ]
}

// Assign car make and model to constant variables
// const make = car.make;
// const model = car.model;

// TODO Part 2: Create make and model variables using object destructuring
const { make, model } = car;

// Declare a normal function that returns formatted car info
function getCarMakeModel(car) {
    return car.make + " " + car.model;
}
console.log(0, getCarMakeModel(car));

// TODO Part 3: Implicit arrow function
const getCarMakeModelImplicit = (car) => `${car.make} ${car.model}`;
console.log(1, getCarMakeModelImplicit(car));

// TODO Part 4: Explicit arrow function
const getCarMakeModelExplicit = (car) => {
    return `${car.make} ${car.model}`;
};
console.log(2, getCarMakeModelExplicit(car));

// TODO Part 5: Destructuring + explicit arrow function
const getCarMakeModelDestructure = ({ make, model }) => {
    return `${make} ${model}`;
};
console.log(3, getCarMakeModelDestructure(car));

// TODO Part 6: for..in loop
for (let prop in car) {
    if (car.hasOwnProperty(prop)) {
        console.log(prop);
    }
}

// Display all values of an array
const primes = [2, 3, 5, 7, 11];
// for (let index = 0; index < primes.length; index++) {
//     console.log(primes[index]);
// }

// TODO Part 7: Display all values using for..of
for (const value of primes) {
    console.log(value);
}

// TODO Part 12: Use reverseString() and concatenateString()
console.log(concatenateString(reverseString("abc"))); // cbacba
