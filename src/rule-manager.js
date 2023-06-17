const Rule = require('./rule.js')

module.exports = class RuleManager extends Array {
    push(...items) {
        const wrapperRule= new Rule()
        wrapperRule.input = items[0];
        items[0] instanceof Rule ? super.push(items[0]) : super.push(wrapperRule)
    }

}