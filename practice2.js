//Objects

const person = {
    name: 'Aniket',
    age: 23,
    //Adding function inside objecr
    greet() {
        console.log("Hello " + this.name);
    }
};
//console.log(person);
//calling function of object
person.greet();

//Arrays
let hobbies = ['sports', 1, 'aniket', true];
for (let hobby of hobbies) {
    console.log(hobby);
}

//map funciton make adjustments to element of array and return new array
console.log(hobbies.map(hobby => 'hobby : ' + hobby));

//arrays are refernce type thats why even we can edit to const arrays   as editing it pointer
// address don't change


//Spread operator (...)
//pulls out property / elements of arrays afgter it/.
const copiedArray = [...hobbies];
console.log(copiedArray);

//Rest opertor
//supports multiple dynamic number of arguments 
//automatically puts args in an array
const restoperatortest = (...args) => args;
console.log(restoperatortest(1, 2, 3, 4, 5, 6));