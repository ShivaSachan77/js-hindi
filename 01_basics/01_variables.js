const accountId = 14553
let accountEmail = "shiva@mail.com"
var accountPass = "1254"
accountCity = "Jaipur"
let accountState;

// accountId =2 // not allowed
console.log(accountId);
accountEmail = "hc@gmail"
accountPass = "2222"
accountCity = "Ludhiana"
console.table([accountId, accountEmail, accountPass, accountCity, accountState])
/*
prefered to not use var
because of issue in block scope and functional scope
*/ 