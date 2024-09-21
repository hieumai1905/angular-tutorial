let money = 1001;
let buyACar = (car) => {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            if (money >= 1000) {
                resolve("can buy a car " + car);
            } else {
                reject("Do not enough money");
            }
        }, 200);
    }));
};
buyACar("Vinfast")
    .then(value => {
        console.log(value);
    }).catch(error => {
    console.log(error);
});
//# sourceMappingURL=main.js.map