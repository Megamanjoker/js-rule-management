# js-rule-management
This project is designed to be a easy to understand and lightweight js module for rule management 

## What is a Rule?
A rule is a prescribed guideline or principle that governs behavior or actions in a particular context or system.

## What is a Rule Management System?
A rule management system is responsible for running all the rule's scripts that is given to it and outputting if they error to a result array on the management object.

## What is a Rule in the Context of this Program?
A rule has the following properties
- input - any data that you want to be inputted into the RunScript
- script - a function to be run by the rule management system

## What is a Rule Script?
A script is a javascript function that can do anything a normal javascript function can. You can even pass data into the function via the input property of the rule object.

## How do I know if a rule passed or failed?
any rule script that throws an error is considered a failed rule. 
any rule script that does not throw an error is considered a passing rule.

## What will the rule management system do with failed rules
the rule management system will collect all the rules and display the results of all the rules in a results array.

## What if I hand the rule management an object that is not a rule object
the rule management system will treat that object as in input into a function that looks like this ()=>{}

# Example of how to use the rule manager
    const ruleManager = new RuleManager()
    const expected = new Rule()
    ruleManager.push(expected)
    ruleManager.runRules()
    ruleManager.results

## Stretch Goal
implement a way to name the rules and have a descriptions on them 