// Write a higher-order function runTwice() that takes a function as an argument 4. and runs it twice.

function runTwice(func) {
    func();
    func();
}

const say = () => console.log("Sycamore Mentorship!");
runTwice(say);
