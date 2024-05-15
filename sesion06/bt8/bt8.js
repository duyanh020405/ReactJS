"use strict";
let firtsName = "duy";
let lastName = "anh";
let fullName = firtsName + " " + lastName;
console.log(firtsName.toUpperCase());
if (firtsName.charAt(0) != firtsName.charAt(0).toUpperCase()) {
    firtsName = firtsName.charAt(0).toUpperCase() + firtsName.slice(1);
}
else {
    fullName = firtsName + lastName;
}
if (lastName.charAt(0) != lastName.charAt(0).toUpperCase()) {
    lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
}
else {
    fullName = firtsName + lastName;
}
