const bonnieMethods = require('../bonnieString');

describe('bonnie string methods', () => {
    // it('length ', () => {
    //     expect(bonnieMethods.bonnieLength('CrossAngleWithBonnie')).toBe(20);
    // });
    // it('length ', () => {
    //     expect(bonnieMethods.bonnieLength('  ')).toBe(2);
    // });
    // it('indexOf ', () => {
    //     expect(bonnieMethods.bonnieIndexOf('Hello world, welcome to the universe.', 'welcome')).toBe(13);
    // });
    // it('indexOf ', () => {
    //     expect(bonnieMethods.bonnieIndexOf('Hello world, welcome to the universe. you are welcome', 'welcome', 15)).toBe(46);
    // });
    // it('slice ', () => {
    //     expect(bonnieMethods.bonnieSlice('Hello world!', 3)).toBe('lo world!');
    // });
    // it('slice ', () => {
    //     expect(bonnieMethods.bonnieSlice('Hello world!', 3, 8)).toBe('lo wo');
    // });
    // it('slice ', () => {
    //     expect(bonnieMethods.bonnieSlice('Hello world!', 0, 1)).toBe('H');
    // });
    // it('slice ', () => {
    //     expect(bonnieMethods.bonnieSlice('Hello world!', 0, -5)).toBe('Hello w');
    // });
    // it('slice ', () => {
    //     expect(bonnieMethods.bonnieSlice('Hello world!', 20)).toBe('');
    // });
    // it('slice ', () => {
    //     expect(bonnieMethods.bonnieSlice('Hello world!', -1)).toBe('!');
    // });
    // it('slice ', () => {
    //     expect(bonnieMethods.bonnieSlice('Hello world!', -1, 5)).toBe('');
    // });
    // it('slice ', () => {
    //     expect(bonnieMethods.bonnieSlice('Hello world!', -2)).toBe('d!');
    // });
    // it('slice ', () => {
    //     expect(bonnieMethods.bonnieSlice('Hello world!', -2, -4)).toBe('');
    // });

    it('split ', () => {
      expect(bonnieMethods.bonnieSplit('How are you doing today?')).toStrictEqual(['How are you doing today?']);
    });
    it('split ', () => {
      expect(bonnieMethods.bonnieSplit('How are you doing today?', null)).toStrictEqual(['How are you doing today?']);
    });
    it('split ', () => {
      expect(bonnieMethods.bonnieSplit('How are you doing today?', ',')).toStrictEqual(['How are you doing today?']);
    });
    it('split ', () => {
      expect(bonnieMethods.bonnieSplit('How are you doing today?', ' ')).toStrictEqual(['How','are','you','doing','today?']);
    });
    it('split ', () => {
      expect(bonnieMethods.bonnieSplit('How&are&you&doing&today?', '&')).toStrictEqual(['How','are','you','doing','today?']);
    });
    it('split ', () => {
      expect(bonnieMethods.bonnieSplit('How are you doing today?', ' ',3)).toStrictEqual(['How','are','you']);
    });
});

