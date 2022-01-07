// whatever you write in IFFE function is private scope so var also dont work

// This is how javascript works

(function(){
    const name = "sumeet";
    console.log(name);

})();

// Dir name
console.log(__dirname);

// File name
console.log(__filename);