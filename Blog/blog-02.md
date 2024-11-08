## How to Handle Asynchronous Operations Using Async/Await Over Callback/Promise in TypeScript

# NB: Not for check. Just Added Randomly.

Asynchronous programming is a common necessity in modern web development. TypeScript offers async/await to handle asynchronous operations in a more readable and manageable way compared to traditional callbacks or promises.

Callbacks were the initial approach to handle asynchronous tasks, but they often led to "callback hell," where nested callbacks made code difficult to follow.

typescript

function fetchData(callback: (data: string) => void) {
setTimeout(() => callback('data'), 1000);
}

fetchData(data => {
console.log(data);
});
Promises improved readability by providing a .then() method to handle asynchronous results. However, chaining promises can still become cumbersome.

typescript
function fetchData(): Promise<string> {
return new Promise(resolve => setTimeout(() => resolve('data'), 1000));
}

fetchData().then(data => {
console.log(data);
});
Async/Await simplifies asynchronous code further by allowing asynchronous functions to be written as if they were synchronous, improving readability and error handling.

typescript
async function fetchData(): Promise<string> {
return new Promise(resolve => setTimeout(() => resolve('data'), 1000));
}

async function run() {
const data = await fetchData();
console.log(data);
}

run();
async/await enhances code clarity and reduces nesting, making it easier to manage multiple asynchronous operations.
