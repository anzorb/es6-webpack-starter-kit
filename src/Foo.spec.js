import Foo from './Foo';
import Bar from './Bar';

describe('Foo', () => {
    let foo;

    beforeEach(() => {
        // Rewire a Promise to return immediately in getSomethingFromServer
        Foo.__Rewire__('getSomethingFromServer', () => Promise.resolve('ES6'));
        // Rewire a function to return a predictable value for testing
        Bar.__Rewire__('pickOneOutOfThree', () => 0);
        foo = new Foo('test-user');
    });

    afterEach(() => {
        foo = undefined;
    });

    describe('api', () => {

        it('should greet', (done) => {
            foo.greet().then((value) => {
                expect(value).toBe('hi, test-user! Welcome to ES6');
                done();
            });
        });

    });

});
