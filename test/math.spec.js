const assert = require('assert');
const Math = require('../src/math.js')
const expect = require('chai').expect;
const sinon = require('sinon');

describe('Math class', () => {
    beforeEach(function() {
        value = 0;
    });

    it('Sum two numbers', function(done) {
        const math = new Math();
        this.timeout(4000);

        //        math.sum(5, 5, (value) => {
        //            assert.equal(value, 10);
        //            done();
        //        })
        value = 5;

        math.sum(value, 5, value => {
            expect(value).to.equal(10);
            done();
        })
    });

    it('Multiply two numbers', function() {
        const math = new Math();
        const obj = {
            name: 'Andre Ferriani',
        };
        const obj2 = {
            name: 'Andre Ferriani',
        };
        //        assert.equal(math.multiply(5, 5), 25);
        //expect(math.multiply(value, 5)).to.equal(0);
        //expect(obj).to.have.property('name')
        //    .to.equal('Andre Ferriani');
        expect(obj).to.deep.equal(obj2);
    });

    it.only('Calls req with sum and index values', function() {
        const req = {};
        const res = {
            load: function load() {
                console.log('Called!');
            }
        };
        //sinon.spy(res, 'load');
        sinon.stub(res, 'load').returns('xpto');
        const math = new Math();

        math.printSum(req, res, 5, 5);

        expect(res.load.args[0][0]).to.equal('index');
    });
});