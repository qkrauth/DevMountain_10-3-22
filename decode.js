// Decode String
// Difficulty:
// Medium

// Concepts:
// Loops

// In this challenge, you’ll write a decoder.
// Write a function that takes in a string and returns a string. A valid argument is a number followed by a sequence of letters. Ex. 2fcjjm
// The number in the string represents how many characters each letter should shift. For example:

// >>> "1a"  "b"
// >>> "3ce"  "fh"
// >>> "2fcjjm"  "hello"

////////// CODE HERE //////////

const decodeFunction = (string) => {
    let word = "";
    for (let i = 0; i < string.length; i++) {
        if (string[i] ===  "a number") {
            // shift the alphabet a few spots for each letter in the input string
        }
    }
    return word;
}
console.log(decodeFunction(""));