const add = (a,b) =>{
    return a+b;
}
const sub = (a,b) =>{
    return a-b;
}
const mul = (a,b) =>{
    return a*b;
}



const name = "sumeet";

// export and making scope from private to public
// module.exports.add = add;
// module.exports.sub = sub;
// module.exports.name= name;
// module.exports.mul = mul;

//simple way of declaring

module.exports = {add, sub ,mul,name};