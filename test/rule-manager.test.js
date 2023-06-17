const Rule = require("../src/rule")
const RuleManager = require("../src/rule-manager")

test("Rule Manager should have a way to all runs to it programmatically",() => {
    const ruleManager = new RuleManager()
    const expected = new Rule()
    ruleManager.push(expected)
    expect(ruleManager[0]).toBe(expected)
})

describe("This test runs through multiple input scenarios for the push feature",()=>{
    ["input", {} , [], 1144].map((testData)=>{
        test("Rule Manager should treat all none rule objects handed to it as an input of ".concat(JSON.stringify(testData)).concat(" to the a rule object that has the script of ()=>{}"),() => {
            const ruleManager = new RuleManager()
            const input = testData
            ruleManager.push(input)
            expect(ruleManager[0].input).toEqual(input)
        })
    })
})



