const Rule = require("../src/rule")
const RuleManager = require("../src/rule-manager")

test("Rule Manager should have a way to all runs to it programmatically",() => {
    const ruleManager = new RuleManager()
    const expected = new Rule()
    ruleManager.push(expected)
    expect(ruleManager[0]).toBe(expected)
})

describe("This test runs through multiple input scenarios for the push feature",()=>{
    ["input", {} , 1144].forEach((testData)=>{
        test("Rule Manager should treat all none rule objects handed to it as an input of ".concat(JSON.stringify(testData)).concat(" to the a rule object that has the script of ()=>{}"),() => {
            const ruleManager = new RuleManager()
            const input = testData
            ruleManager.push(input)
            expect(ruleManager[0].input).toEqual(input)
        })
    });

    [ [new Rule()], [new Rule(),new Rule()], [new Rule(),new Rule(),new Rule()] ].forEach((testData)=>{
        test("Rule Manager should push multiple rule objects ".concat(JSON.stringify(testData)).concat(" and add them to the rule set"),() => {
            const ruleManager = new RuleManager()
            const input = testData
            ruleManager.push(...input)
            expect(ruleManager).toEqual(input)
        })
    });

    [ [new Rule()], [new Rule(),new Rule()], [new Rule(),new Rule(),new Rule()] ].forEach((testData)=>{
        test("Rule Manager should flatten an array of rule objects ".concat(JSON.stringify(testData)).concat(" and add them to the rule set"),() => {
            const ruleManager = new RuleManager()
            const input = testData
            ruleManager.push(input)
            expect(ruleManager).toEqual(input)
        })
    });

    [   {input:[new Rule(), {}],output:[new Rule(), new Rule({})]},
        {input:[new Rule(), []],output:[new Rule(), new Rule([])]},
        {input:[new Rule(), "asdf"],output:[new Rule(), new Rule("asdf")]}
    ].forEach((testData)=>{
        test("Rule Manager should work with this input".concat(JSON.stringify(testData.input)),() => {
            const ruleManager = new RuleManager()
            const {input,output} = testData
            ruleManager.push(input)
            expect(JSON.stringify(ruleManager)).toEqual(JSON.stringify(output))
        })
    });
})

describe("This is to test the running all the rules",()=>{

    [1,2,5,54].forEach((testData)=>{
        test("After adding "+testData+" rule(s) to the rule manager, called runRules should call all the rules in the array " + testData + " time(s)",()=>{

            const mockScript = jest.fn(()=>{});
            const mockRule = new Rule("",mockScript);
            const input = [...Array(testData).keys()].map(() => mockRule)
            const ruleManager = new RuleManager()
            ruleManager.push(input)
            ruleManager.runRules()
            expect(mockScript).toHaveBeenCalledTimes(testData);
        })
    });

    ["help","me","I","am","in","a","tower","of","pizza",14452].forEach((testData)=>{
        test("After adding a rule with the input "+testData+", when runRules should call all the inputs should be give to the script",()=>{
            const mockScript = jest.fn(()=>{});
            const mockRule = new Rule(testData,mockScript);
            const input = [...Array(testData).keys()].map(() => mockRule)
            const ruleManager = new RuleManager()
            ruleManager.push(input)
            ruleManager.runRules()
            expect(mockScript).toHaveBeenCalledWith(testData);
        })
    });

    [[()=>{throw new Error()}],
        [()=>{throw new Error()},()=>{throw new Error()}],
        [()=>{throw new Error()},()=>{throw new Error()},()=>{throw new Error()}]
    ].forEach((testData)=>{
        test("Given an array of rules with length "+testData.length+" that will error on the scripts, do not throw",()=>{
            const input = testData.map((value) => new Rule(undefined,value))
            const ruleManager = new RuleManager()
            ruleManager.push(input)
            expect(()=>{ruleManager.runRules();}).not.toThrow();
        })
    });

        [
            [()=>{},()=>{throw new Error()}],
            [()=>{throw new Error()}],
            [()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{throw new Error()},()=>{},()=>{},()=>{},()=>{},()=>{}],
            [()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{}]
        ].forEach((testData,index)=>{
        test(index + " - Given an array of rules, when one of the scripts error, then store all the results in the object",()=>{
            const input = testData.map((value) => new Rule(undefined,value))
            const ruleManager = new RuleManager()
            const expectedOutput = testData.map(value => {
                try{value();return"passed"}
                catch (e) {return e}
            })
            ruleManager.push(input)
            ruleManager.runRules()
            expect(ruleManager.results).toEqual(expectedOutput)
        })
    })
})



