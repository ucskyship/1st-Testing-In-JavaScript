// const assert = chai.assert;

// mocha.setup("bdd");

// it("I can test", function(){
//     assert.equal(1+1, 2);    
// })

// mocha.run();

// // ---------------------------------------------------------------------------------------
// const expect = chai.expect;

// mocha.setup("bdd");

// it("I can test", function(){
//     expect(NaN).to.be.NaN;    
// })

// mocha.run();

// ---------------------------------------------------------------------------------------

const expect = chai.expect;
const assert = chai.assert;

mocha.setup("bdd");
describe("Sum function test", () =>{
    before(() => console.log("Before all"))
    after(() => console.log("After all"))

    beforeEach(() => console.log("Before each"))
    afterEach(() => console.log("After each"))

    it("sum(2, 3) should be 5", () =>{
        expect(2 + 3).to.equal(5);
    }); 
    it("sum(4, 6) should be 10", () =>{
        expect(4 + 6).to.equal(10);
    });
    it("2 + 2 should be 4", () => {
        expect(sum(2, 2)).to.equal(4);
    });
});


describe("Sum the function test", () => {
    it("2 + 2 should be 4", () =>{
        expect(2 + 2).to.equal(4)
    });
    it("I can test", function(){
        assert.equal(1+1, 2);    
    });
    it("multiplyNumber(2, 4) should multiply to 8", () => {
        expect(2 * 4).to.equal(8)
    });
});
mocha.run();

