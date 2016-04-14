import 'babel-polyfill';
import Bar from './Bar';
import { getSomethingFromServer } from './Utils';

/**
 * Class Foo. Does things
 * @param {String} name
 */

export default class Foo extends Bar {

    /**
     * Wait for server, and greet
     * @returns {Promise}
     */
    greet() {
        return getSomethingFromServer()
            .then((response) => `hi, ${this.name}! ${this.welcomeString} to ${response}`);
    }

}
