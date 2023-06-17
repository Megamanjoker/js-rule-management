const Rule = require("../src/rule")
const RuleManager = require("../src/rule-manager")

test("Rule Manager should have a way to all runs to it programmatically",() => {
    const ruleManager = new RuleManager()
    const expected = new Rule()
    ruleManager.push(expected)
    expect(ruleManager[0]).toBe(expected)
})
