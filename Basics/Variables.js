const accountId = 151213
let accountEmail = "Aleph123@gmail.com"
var accountPassword ="aLePh@123"
accountCity = "Allahabad"

// accountId = 12 // const are ummutable, can't be change.
accountEmail = "aleph.node@gmail.com"
accountPassword = "aldA@123"
accountCity = "Prayagraj" // Not a correct way
let accountState;

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
console.log(typeof accountId)
