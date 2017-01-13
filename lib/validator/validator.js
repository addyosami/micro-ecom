var _ = require('lodash'),
    // local modules
    validatorRule = require('./validatorRule');

var Validator = function (ruleValidation) {
    this.validatorRule = (ruleValidation === undefined ? validatorRule : ruleValidation);
    this.errors = {};
};

var prototype = Validator.prototype;

// item
//   {
//      username: 'abc',
//      age: 123
//   }

prototype.validate = function (item, constraints) {
    var self = this,
        validatorRule = this.validatorRule;

    _.forEach(constraints, function (validatorRuleOptions, validatorAttribute) {
        let itemValue = item[validatorAttribute];

        if (typeof validatorRuleOptions !== 'function' || validatorRuleOptions !== Object(validatorRuleOptions)) {
            throw new Error('Not have a valid validatorRule');
        }

        if (typeof validatorRuleOptions === 'function') {
            let result = validatorRuleOptions(itemValue);

            if (result !== Object(result)) {
                throw new Error('Not have a valid returned value of validatorRule');
            }

            if (!result.isValid) {
                //this.errors[validatorAttribute] = result.errMsg;
                this.errors = addErrors(this.errors, validatorAttribute, result.errMsg);
            }

            // Will suport return an object like this
            //   return {
            //     required: true,
            //     length: {is: 5}
            //   }
        }

        _.forEach(validatorRuleOptions, function (validatorRuleFunc, validatorRuleName) {
            if ( !validatorRule[validatorRuleName] && (typeof validatorRuleFunc !== 'function') ) {
                throw new Error('Not have a valid validatorRule');
            }

            if (!validatorRule[validatorRuleName]) {
                let result = validatorRule[validatorRuleName](itemValue);

                if (result !== Object(result)) {
                    throw new Error('Not have a valid returned value of validatorRule');
                }

                if (!result.isValid) {
                    //this.errors[validatorAttribute] = result.errMsg;
                    this.errors = addErrors(this.errors, validatorAttribute, result.errMsg);
                }
            }

            let result = validatorRule[validatorRuleName](validatorRuleFunc);
            if (result.isValid) {
                this.errors = addErrors(this.errors, validatorAttribute, result.errMsg);
            }
        })
    });
};

prototype.isValid = function () {
    return !!this.getErrors().length;
};

prototype.getErrors = function () {
    return this.errors;
};

function addErrors (errors, attribute, errMsg) {
    errors[attribute] = errors[attribute] ? errors[attribute].push(errMsg) : [].push(errMsg);

    return errors;
}

module.exports = Validator;

// usage
//   require('./validator')(validateLib)
// default without arg => use default validator