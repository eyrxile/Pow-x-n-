var myPow = function(x, n) {
    if(n === 0) {
        return 1;
    }

    if(n < 0) {
        x = 1 / x;
        n = -n;
    }
    
    const pow = (x, n) => {
        if(n === 0) {
            return 1;
        }

        const half = pow(x, Math.floor(n / 2));
        const result = half * half;

        if(n % 2 !== 0) {
            return result * x;
        } else {
            return result;
        }
    }
    return pow(x, n);
};

//Example usage:
console.log(myPow(2.00000, 10));
console.log(myPow(2.10000, 3));
console.log(myPow(2.00000, -2));