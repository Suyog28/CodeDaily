 const account_name = "suyog";
 let account_type= "Saving";
 var account_balance = 292929;
 account_city = "pune";

 let pincode;

 account_type="current";
 account_balance="28787287";
 account_city="mumbai";

 /*
 Prefer not to use var
 because of issue in block scope and functional scope
 */ 

 console.table([account_type,account_name,account_balance,account_city, pincode]);