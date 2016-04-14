import Bar from './Bar';

const strings = ['Welcome', 'Willkommen', 'Bienvenue'];

describe('Bar', () => {
    let bar;

    beforeEach(() => {
        bar = new Bar('test-user');
    });

    afterEach(() => {
        bar = undefined;
    });

    it('should initialize and set its name', () => {
        expect(bar.name).toBe('test-user');
    });

    describe('api', () => {

        it('should return one of 3 strings', () => {
            let result = bar.welcomeString;
            expect(strings.indexOf(bar.welcomeString)).not.toBe(-1);
        });

    });

});
