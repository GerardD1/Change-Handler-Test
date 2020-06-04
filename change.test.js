const {ChangeHandler} = require('./changehandler.js'); //this is the name of the class in th changehandler.js file that was given. 
//ChangeHandler is the class from the script file that needs to be imported into this file. Adding the {} around it is called destructuring. 
//Because theres nothing in your current change.js file, it won't be able to run any tests. 

describe(coins, function() {
    test('Return amountDue() based on number of coins entered, cashTendered equals zero', function() {
        let expected = '2 quarters';
        let actual = coins.constructor;
        expect(actual).toBe(expected);
    });

    test('If quarter is entered add 25, if dime is entered add 10, if nickel is entered add 5, and if penny is entered add 1. If the function is called multiple times continue adding on to the amount', function() {
        let expected = 'penny';
        let actual = coins.insertCoin;
        expect(actual).toBe(expected);
    });

    test('Return true if cashTendered() is more than amountDue, return false if cashTendered() is less than amountDue, return true is cashTendered() is equal to amountDue', function() {
        let expected = true;
        let actual = coins.isPaymentSufficient;
        expect(actual).toBe(expected);
    });

    test('If 32 cents change produces: quarters: 1, dimes: 0, nickels: 1, pennies: 2. If 10 cents change produces: quarters: 0, dimes: 1, nickels: 0, pennies: 0. If 27 cents change produces: quarters: 1, dimes: 0, nickels: 0, pennies: 2. If 68 cents change produces: quarters: 2, dimes: 1, nickels: 1, pennies: 3', function() {
        let expected = '32 = quarters: 0';
        let actual = coins.giveChange;
        expect(actual).toBe(expected);
    });
});
