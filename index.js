const Calculate = {
    factorial(num) {
        if (num === 0) {
            return 1;
        } else if (num < 0) {
            throw new Error('-1. We are only calculating n! of positive integers.');
        } else {
            return num * this.factorial(num - 1);
        }
    }
}

console.log(Calculate.factorial(3));

module.exports = Calculate;