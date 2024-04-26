inputWord = String(prompt("Enter a word to determine if it's a plindrome: "));

// converting the input to all lower cases for testing as it will get reversed and compared
let word = inputWord.toLowerCase();

// reversing the word to compare
wordReversed = word.split(``).reverse().join(``);
// console.log(wordReversed);

while (word == wordReversed || word != wordReversed ) {
    if (word == wordReversed) { 
        console.log(`The word ` + inputWord + ` is a palindrome`);
    } else {
        console.log(`The word ` + inputWord + ` is not a palindrome`);
    }
    break;
}
//oh once again I really struggled with finding a logical way to fit a while loop in here.
//please do let me know if there's a better way