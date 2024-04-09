const lib = require("libphonenumber-js");

let namba = "+34 655 444 777";
let badNamba = "+24 655 444 777";
let countryCode = "ES";
let gud = lib.isValidPhoneNumber(namba, countryCode);
let nogud = lib.isValidPhoneNumber(badNamba, countryCode);

console.log({ gud, nogud });
