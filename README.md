# js-rule-management
This project is designed to be a easy to understand and lightweight js module for rule management 

## What is a Rule?
A rule is a prescribed guideline or principle that governs behavior or actions in a particular context or system.

## What is a Rule Management System?
A rule management system is responsible for runs all the rule's scripts that is given to it.

## What is a Rule in the Context of this Program?
A rule has the following properties
- input - any data that you want to be inputted into the RunScript
- script - a function to be run by the rule management system
- name (optional) - name of the rule
- description (optional) - description of the rule

## What is a Rule Script?
A script is a javascript function that can do anything a normal javascript function can. I can even pass data into the function via the input property of the rule object.

## How do I fail a run?
any rule script that throws an error is considered a failed rule. 
any rule script that does not throw an error is considered a passing rule.

## What will the rule management system do with failed rules
the rule management system will collect all the rules and display the results of all the rules.

## When will the rule management system throw an error
as of right now the only error that will be throw is if one of the rules fails.

