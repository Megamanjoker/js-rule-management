module.exports = class Rule {
    input= {}
    script = () => {}

    constructor(input,script) {
        this.input = input;
        this.script = script;
    }
}