let arr = [1, 6, 19, 22, 15, 30, 45, 4, 7, 9, 11, 20, 25, 28, 35, 40, 42, 44, 46, 48];
let total = 0;
for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
        total += arr[i];
    }
}
console.log(`Sum of prime numbers in array is ${total}`);
//# sourceMappingURL=find-prime.js.map