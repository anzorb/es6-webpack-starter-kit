// Simulate fetching something from the server
export function getSomethingFromServer() {
    return new Promise((resolve) => {
        window.setTimeout(() => {
            resolve('ES6');
        }, 1000);
    });
}
