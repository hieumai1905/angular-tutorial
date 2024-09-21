let count = 0;
let n = 2;
let sum = 0;
while (count < 30) {
    if (isPrime(n)) {
        sum += n;
        count++;
    }
    n++;
}
console.log(`Sum of first 30 prime numbers is ${sum}`);
function isPrime(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0)
            return false;
    }
    return true;
}
//# sourceMappingURL=prime.js.map