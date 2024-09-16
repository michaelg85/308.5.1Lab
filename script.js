// Part 1: Thinking Functionally

// Take an array of numbers and return the sum.

const arrayNum = [2, 4, 6, 8]

let sum = 0
let avg = sum

for (let i = 0 ; i < arrayNum.length; i++) {
    sum += arrayNum[i];
}

// Take an array of numbers and return the average.

for (let i = 0 ; i < arrayNum.length; i++) {
    avg += arrayNum[i] / 4;
}

console.log (`The sum of the array equals`, sum)
console.log (`The average of the numbers equals`, avg)

// Take an array of strings and return the longest string.

const array = [`say`, `goodnight`, `in`, `the`, `evening`]

let length = 0
let longest = ``

for (let i = 0; i < array.length; i++) {
    if (array[i].length > length) {
        let length = array[i].length;
        longest = array[i];
    }
}

console.log (`The longest string is`, longest)


// Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
// For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].

const array2 = [`say`, 'good', `afternoon`, `around`, `noon`, 4]

let longer = ''

for (let i = 0; i >= array2.length; i++) {
    if (array2[i].length >= length[i]) {
        let length = array2[i].length;
        longer = array2[i];
    }
}

console.log (`Longer Strings are`, longer)


// Take a number, n, and print every number between 1 and n without using loops. Use recursion.