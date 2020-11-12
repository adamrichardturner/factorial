const assert = require("assert");
const Calculate = require('../index.js')

describe('Calculate', () => {
    describe('.factorial', () => {
        it('tests if the output of 5! is equal to 120', () => {
            // Setup 
            const expectedResult = 120;
            const argument = 5;
            // Exercise
            const result = Calculate.factorial(argument);
            // Verification
            assert.strictEqual(expectedResult, result);
        });

        it('tests if the output of 3! is equal to 6', () => {
            // Setup
            const expectedResult = 6;
            const argument = 3;
            // Exercise
            const result = Calculate.factorial(argument);
            // Verification
            assert.strictEqual(result, expectedResult);
        });

        it('returns 1 when you pass in 0!', () => {
            // Setup 
            const expectedResult = 1;
            const argument = 0;
            // Exercise
            const result = Calculate.factorial(argument);
            // Verification
            assert.strictEqual(expectedResult, result);
        });

        it('returns -1 when you pass in -3!', () => {
            // Setup
            const expectedResult = -1;
            const argument = -3;
            // Exercise
            const result = Calculate.factorial(argument);
            // Verification
            assert.strictEqual(expectedResult, result);
        });

    });
});