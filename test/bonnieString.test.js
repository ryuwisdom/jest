// const bonnieMethods = require('../bonnieString').bonnie;
// const bonnieMethods = require('../reviewStringMethods').bonnie;
const bonnieMethods = require('../newString').bonnie;

describe('bonnie string methods', () => {
    // it('length ', () => {
    //     expect(bonnieMethods.length('CrossAngleWithBonnie')).toBe(20);
    // });
    // it('length ', () => {
    //     expect(bonnieMethods.bonnieLength('  ')).toBe(2);
    // });
    it('indexOf ', () => {
        expect(bonnieMethods.indexOf('Hello world, welcome to the universe.', 'welcome')).toBe(13);
    });
    it('indexOf ', () => {
        expect(bonnieMethods.indexOf('Hello world, welcome to the universe.', 'H')).toBe(0);
    });
    // it('indexOf ', () => {
    //     expect(bonnieMethods.indexOf('Hello world, welcome to the universe.', '+_+')).toBe(-1);
    // });
    // it('indexOf ', () => {
    //     expect(bonnieMethods.indexOf('Hello world, welcome to the universe. you are welcome', 'welcome', 15)).toBe(46);
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
    //
    // it('split ', () => {
    //     expect(bonnieMethods.split('How are you doing today?')).toStrictEqual(['How are you doing today?']);
    // });
    // it('split ', () => {
    //     expect(bonnieMethods.split('How are you doing today?', null)).toStrictEqual(['How are you doing today?']);
    // });
    // it('split ', () => {
    //     expect(bonnieMethods.split('How are you doing today?', ',')).toStrictEqual(['How are you doing today?']);
    // });
    it('split ', () => {
        expect(bonnieMethods.split('How are you doing today?', ' ')).toStrictEqual(['How', 'are', 'you', 'doing', 'today?']);
    });
    // it('split ', () => {
    //     expect(bonnieMethods.split('How&are&you&doing&today?', '&')).toStrictEqual(['How', 'are', 'you', 'doing', 'today?']);
    // });
    // it('split ', () => {
    //     expect(bonnieMethods.split('How are you doing today?', ' ', 3)).toStrictEqual(['How', 'are', 'you']);
    // });

    //
    // it('match ', () => {
    //     expect(bonnieMethods.match('The rain in SPAIN stays mainly in the plain')).toStrictEqual('');
    // });
    // it('match ', () => {
    //     expect(bonnieMethods.match('The rain in SPAIN stays mainly in the plain', /ain/g)).toStrictEqual(["ain", "ain", "ain"]);
    // });
    // it('match ', () => {
    //     expect(bonnieMethods.match('The rain in SPAIN stays mainly in the plain', /ain in/)).toStrictEqual(["ain in"]);
    // });
    // it('match ', () => {
    //     expect(bonnieMethods.match('The rain in SPAIN stays mainly in the plain', 'w')).toBe(null);
    // });
    // it('match ', () => {
    //     expect(bonnieMethods.match('The rain in SPAIN stays mainly in the plain',Infinity)).toBe(null);
    // });
    // it('match ', () => {
    //     expect(bonnieMethods.match('The rain in SPAIN stays mainly in the plain','NaN')).toBe(null);
    // });
    // it('match ', () => {
    //     expect(bonnieMethods.match('The rain in SPAIN stays mainly in the plain', true)).toBe(null);
    // });

    // it('replace ', () => {
    //     expect(bonnieMethods.replace('Bonnie has a blue house and a blue car.', /blue/g, 'red'))
    //         .toBe('Bonnie has a red house and a red car.');
    // });
    // it('replace ', () => {
    //     expect(bonnieMethods.replace('Bonnie has a blue house and a blue car.', /blue/, 'red'))
    //         .toBe('Bonnie has a red house and a blue car.');
    // });


});

