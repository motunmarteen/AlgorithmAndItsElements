function analyzeSentence(sentence) {
    let lengthCounter = 0;
    let wordCounter = 0;
    let vowelCounter = 0;
    const vowels = 'aeiouAEIOU';

    // Loop through each character in the sentence
    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];
        lengthCounter++;

        // Count vowels
        if (vowels.includes(char)) {
            vowelCounter++;
        }

        // Count words
        if (char === ' ' || char === '.') {
            if (i > 0 && sentence[i - 1] !== ' ' && sentence[i - 1] !== '.') {
                wordCounter++;
            }
        } else if (i === sentence.length - 1 && char !== ' ' && char !== '.') {
            // Increment word counter for the last word
            wordCounter++;
        }
    }

    // Output results
    console.log(`Length of the sentence: ${lengthCounter}`);
    console.log(`Number of words: ${wordCounter}`);
    console.log(`Number of vowels: ${vowelCounter}`);
}

// Example usage
const sentence = "This is a test sentence.";
analyzeSentence(sentence);
