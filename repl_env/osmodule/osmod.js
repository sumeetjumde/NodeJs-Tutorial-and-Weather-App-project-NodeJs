const { copyFileSync } = require("fs");
const os = require("os");

console.log(os.arch());

// console
// sumeetpravinjumde@Sumeets-Air osmodule % node osmod.js
// arm64
// sumeetpravinjumde@Sumeets-Air osmodule % 

const freeMemory = os.freemem();
console.log(`${freeMemory}`);

const totalmem = os.totalmem();
console.log(`${totalmem}`);

console.log(os.hostname());

console.log(os.platform());

console.log(os.tmpdir());
console.log(os.type());


// console result

// Node.js v17.0.1
// sumeetpravinjumde@Sumeets-Air osmodule % node osmod.js
// arm64
// 336494592
// 8589934592
// Sumeets-Air
// darwin
// /var/folders/mm/bl1r88_d2p7_vklkhw7_lyd80000gn/T
// Darwin