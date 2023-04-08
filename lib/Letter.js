class Letter {
    constructor(char) {
        this.char = char;
        this.visible = !/[a-z\d]/i.test(char);
    }

    toString() {
        if(this.visible == false){
            return "_";
        }
        else {
            return this.char;
        }
    }
}

module.exports = Letter;
