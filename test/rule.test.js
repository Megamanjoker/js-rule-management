const Rule = require("../src/rule")

test("Rule object should have an input field that would be feed into the Rule Script Function",() => {
    expect(Rule).toHaveProperty('input')

})

