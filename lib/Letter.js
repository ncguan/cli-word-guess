class Letter {
    constructor(char) {
        this.char = char;
        this.visible = !/[a-z\d]/i.test(char);
    }
}

module.exports = Letter;
