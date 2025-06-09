// TODO Part 8: Use spread operator to reverse a string
function reverseString(str) {
    // return str.split("").reverse().join("");
    return [...str].reverse().join("");
}

// TODO Part 10: Add anonymous function concatenateString inside module.exports
// TODO Part 9: Export both functions using module.exports
module.exports = {
    reverseString,
    concatenateString: (str) => str + str
};
