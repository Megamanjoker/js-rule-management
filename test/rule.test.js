const Rule = require("../src/rule")

test("Rule object should have an input field that would be feed into the Rule Script Function",() => {
    expect(new Rule()).toHaveProperty('input')
})

test("Rule object should have an ruleScript field the should be a function",() => {
    expect(new Rule().script).toBeInstanceOf(Function);
})

