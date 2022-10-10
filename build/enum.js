"use strict";
// enum numeric
// enum Month {
//     jan,
//     feb,
//     mar,
//     apr,
//     may
// }
var Month;
(function (Month) {
    Month["jan"] = "Januari";
    Month["feb"] = "Febuari";
    Month["mar"] = "Maret";
    Month["apr"] = "April";
    Month["may"] = "Mei";
})(Month || (Month = {}));
console.log(Month.jan);
