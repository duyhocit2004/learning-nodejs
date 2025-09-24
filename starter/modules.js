console.log(arguments);
console.log(require("module").wrapper);

// module.exports
const c = require('./test-modules-1');
const calc1 = new c ();

console.log(calc1.tinhCong(2,3))

// exports
//const calce2 = require('./test-modules-2')
const {congNhanChia}  = require('./test-modules-2')

console.log(congNhanChia(2,5))