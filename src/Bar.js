const strings = ['Welcome', 'Willkommen', 'Bienvenue'];
const pickOneOutOfThree = () => Math.floor(Math.random(0, 2) * 3);

/**
 * Class Bar. Does things
 * @param {String} name
 */
export default class Bar {
    constructor(name) {
        this.name = name;
    }

    /**
     * Welcome String getter
     */
    get welcomeString() {
        return strings[pickOneOutOfThree()];
    }
}
