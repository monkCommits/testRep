var myName = "   kartikey tiwari"

function getLength(string) {
    console.log(string, " ",string.length);
}

function findInexOf(string) {
    console.log(string.indexOf('k'));
    console.log(string.lastIndexOf('k'));
}

function getSlice(string) {
    console.log(string.slice(1,4));
}

function split(string) {
    console.log(string.split(" "));
}
function trim(string) {
    console.log(string.trim());
}

// substring
// replace
// toUpperCase
// toLowerCase

//array

const arr = [1,2,3]

function logThing(string) {
    console.log(string);
}
// arr.forEach(logThing)

//class

class Animal {
    constructor(name, legCount, speaks){
        this.name = name;
        this.legCount = legCount;
        this.speaks = speaks;
    }
    speak(){
        console.log(this.name + " speaks " + this.speaks );
    }
}

const dog = new Animal("dog",4,"bow-bhow");
const monkey = new Animal("monkey", 2, "chee chee")

// traditional way of making object
// const dog = {
//     name : "dog",
//     legCpunt : 4,
//     speaks : "bhow-bhow",
//     speak(){
//         console.log(this.name + " speaks " + this.speaks);
//     }
// }

// dog.speak()

// json
const user = {
    name : "monk",
    gender : 'male',
    role : 'dev',
    intro(){
        console.log("hi am ", this.name , " a ", this.role);
    }
}

// console.log(JSON.stringify(user));

console.log(user.hasOwnProperty("intro"));

let newObj = Object.assign({},user, {test1 : "value1", test2 : "value2"})
console.log(newObj);