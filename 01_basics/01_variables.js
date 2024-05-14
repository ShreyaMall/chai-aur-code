const accountId = 12345
let accountEmail = "shreya@google.com"
var accountPassword = "54321"
accoutCity = "goa"
let accountState;

// accountId = 2 // not allowed

accountEmail = "sm@sm.com"
accountPassword ="6789"
accountCity ="gkp"

console.log("accountId");

/* 
Prefer not to use var
Because of issue in block scope and functional scope

*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

