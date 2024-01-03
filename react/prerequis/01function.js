/**
 * Renvoie la somme des deux paramètres
 * @param {number} b 
 * @param {number} a 
 * @returns {number} a+b
 */
/* function sum(a = 0, b = 0) {
    return a + b;
} */

const sum = (a, b) => a + b;

/**
 * 
 * @param {Object} account 
 * @param {number} amount 
 */
function withdraw(account, amount) {
    account.total -= amount;
    amount -= 10;
}

const account = {
    total: 20
}

const amount = 10;
console.log("account :", account);
console.log("amount :", amount);

withdraw(account, 5);

console.log("account :", account);
console.log("amount :", amount);