const Rule = require("./rule");

module.exports = class RuleManager extends Array {
  push(...items) {
    return super.push(
      ...items.flat().map((item) => {
        const wrapperRule = new Rule();
        wrapperRule.input = item;
        return item.script ? item : wrapperRule;
      })
    );
  }

  runRules() {
    return (this.results = this.map((rule) => {
      try {
        rule.script(rule.input);
        return "passed";
      } catch (e) {
        return e;
      }
    }));
  }
};
