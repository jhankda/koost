const account_id = 14455945//cannot reassign
let account_email = "harsh+games@gamil.com"
var account_passwd = "1548"
/* 
    var is global scope
    var can be reassign
    var can be redeclare
    prfer using let
*/
account_city = "Bangalore"
let account_country;

// account_id = 2 // not allowed
// console.log(account_id);

account_email = "hj.com"
// console.log(account_email);

account_passwd = "123"
// console.log(account_passwd);

account_city = "Mumbai"
// console.log(account_city);
console.table([account_id, account_email, account_passwd, account_city, account_country])
