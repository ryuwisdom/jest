const bonnieMethods = require('../bonnieString');
// require('../bonnieString.js');

// console.log('test1')

describe('bonnie string methods', () => {
    it('length ', () => {
        expect(bonnieMethods.bonnieLength('CrossAngleWithBonnie')).toBe(20);
    });
    it('length ', () => {
        expect(bonnieMethods.bonnieLength('  ')).toBe(2);
    });
    it('indexOf ', () => {
        expect(bonnieMethods.bonnieIndexOf('Hello world, welcome to the universe.', 'welcome')).toBe(13); // 인자 With
    });
    it('indexOf ', () => {
        expect(bonnieMethods.bonnieIndexOf('Hello world, welcome to the universe. you are welcome', 'welcome', 15)).toBe(46); // 인자 With
    });
    it('slice ', () => {
        expect(bonnieMethods.bonnieSlice('Hello world!', 3)).toBe('lo world!');
    });
    it('slice ', () => {
        expect(bonnieMethods.bonnieSlice('Hello world!', 3, 8)).toBe('lo wo');
    });
    it('slice ', () => {
        expect(bonnieMethods.bonnieSlice('Hello world!', 0, 1)).toBe('H');
    });
    it('slice ', () => {
        expect(bonnieMethods.bonnieSlice('Hello world!', 0, -5)).toBe('Hello world');
    });
    it('slice ', () => {
        expect(bonnieMethods.bonnieSlice('Hello world!', 20)).toBe('');
    });
    it('slice ', () => {
        expect(bonnieMethods.bonnieSlice('Hello world!', -1)).toBe('!');
    });
    it('slice ', () => {
        expect(bonnieMethods.bonnieSlice('Hello world!', -1, 5)).toBe('');
    });

    // it('split ', () => {
    //   expect('CoinJab,withJeff').toStrictEqual(['CoinJab', 'withJeff']); // 인자 : ','
    // });
});

