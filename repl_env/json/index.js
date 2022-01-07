const biodata={
    name:'sumeet jumde',
    age:22,
    email:'jumdesumeet@gmail.com'
}

console.log(biodata.name);

const jsondata= JSON.stringify(biodata);
const objdata = JSON.parse(jsondata);
console.log(jsondata);
console.log(objdata);
console.log(objdata.email);