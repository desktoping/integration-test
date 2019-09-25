const { expect } = require('chai');
const { addOne } = require('../utils');

describe('Pass', () => {
    it('1 + 1 is equal to 2', async () => {
        const two = addOne(1);
        expect(two).to.eql(2);
    })
})
