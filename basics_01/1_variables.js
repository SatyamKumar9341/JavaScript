const accountId = 156432
let accountEmail = "satyam@gmail.com"
var accountPassword = "12345"      // consider using let in place of var(because of issues in block scope & functional scopes)
accountCity = "ranchi"
let accountState;

// try to change one by one

// accountId = 2    not allowed (TypeError: Assignment to constant variable)
accountEmail = "satyam8676@gmail.com"
accountPassword = "223344"
accountCity = "dehradun"

console.table([accountEmail, accountPassword, accountCity, accountState])
console.log(accountId)