const canIVote = age => {
    if (age >= 18) {
        return true
    } else {
        return false
    }
}
/*
// Alternate solutions:

// As a function declaration:
function canIVote(age) {
    if (age >= 18) {
        return true
    } else {
        return false
    }
}

// Using a ternary:
const canIVote = (age) => age >= 18 ? true : false
*/

console.log(canIVote(19))