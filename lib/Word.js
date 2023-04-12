const Letter = require("./Letter");

class Word {
    constructor(word){
        this.word = word;
        this.letters = word.split("").map(letter => new Letter(letter));
    }
}

module.exports = Word;
