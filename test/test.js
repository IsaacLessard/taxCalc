var code = require('../main');
var expect = require('chai').expect;
describe('taxCalculator', function(){
	it('calculates 10% on first 10$', function(){
		expect(code.taxCalculator(1)).to.equal(0.1);
		expect(code.taxCalculator(10)).to.equal(1);
	});
	it('calculates next 10$ at 7%', function(){
		expect(code.taxCalculator(15)).to.equal(1.35);
		expect(code.taxCalculator(20)).to.equal(1.7);
	});
	it('calculates third 10$ at 5%', function(){
		expect(code.taxCalculator(25)).to.equal(1.95);
		expect(code.taxCalculator(30)).to.equal(2.2);
	});
	it('rest is taxed at 3%', function(){
		expect(code.taxCalculator(35)).to.equal(2.35);
		expect(code.taxCalculator(40)).to.equal(2.5);
	});
});
