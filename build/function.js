"use strict";
// type
function getName() {
    return "Raka";
}
function printName() {
    console.info("rkaa");
}
function multiPly(val1, val2) {
    return val1 * val2;
}
const Add = function (val1, val2) {
    return val1 * val2;
};
const fullName = (first, last = "Arkaan") => {
    return `${first} ${last}`;
};
const getUmur = (val1, val2) => {
    return `${val1} ${val2}`;
};
console.info(Add(10, 5));
console.info(fullName("raka"));
console.info(getUmur("rakaa"));
