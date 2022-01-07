const path= require("path");

//path
console.log(path.dirname('/Users/sumeetpravinjumde/Documents/Work/Coding/Nodejs/repl_env/pathmodule/pathmod.js'));
// entension
console.log(path.extname('/Users/sumeetpravinjumde/Documents/Work/Coding/Nodejs/repl_env/pathmodule/pathmod.js'));
// base name
console.log(path.basename('/Users/sumeetpravinjumde/Documents/Work/Coding/Nodejs/repl_env/pathmodule/pathmod.js'));
// return an object having all info
console.log(path.parse('/Users/sumeetpravinjumde/Documents/Work/Coding/Nodejs/repl_env/pathmodule/pathmod.js'));

// access all info of file

const mypath= path.parse('/Users/sumeetpravinjumde/Documents/Work/Coding/Nodejs/repl_env/pathmodule/pathmod.js');

console.log(mypath.name);
console.log(mypath.ext);


// console

// sumeetpravinjumde@Sumeets-Air pathmodule % node pathmod.js
// /Users/sumeetpravinjumde/Documents/Work/Coding/Nodejs/repl_env/pathmodule
// .js
// pathmod.js
// {
//   root: '/',
//   dir: '/Users/sumeetpravinjumde/Documents/Work/Coding/Nodejs/repl_env/pathmodule',
//   base: 'pathmod.js',
//   ext: '.js',
//   name: 'pathmod'
// }
// pathmod
// .js