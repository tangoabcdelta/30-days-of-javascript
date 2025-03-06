/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let num = init;

    this.increment = () => {
        return ++num;
    }
    this.decrement = () => {
        return --num;
    }
    this.reset = () => {
        return num = init;
    }
    return this;
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
