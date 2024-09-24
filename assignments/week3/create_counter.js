// Write a function createCounter() that uses closures to create a counter object with increment and decrement methods.

function create_counter() {
    let count = 0;
    return {
        increment: function() {
        count++;
        return count;
        },
        decrement: function() {
        count--;
        return count;
        }
    };
    }
    const counter = create_counter();
    console.log(counter.increment());
    console.log(counter.increment());
    console.log(counter.decrement());
    console.log(counter.decrement());
    console.log(counter.decrement());
    console.log(counter.increment());
    console.log(counter.decrement());
