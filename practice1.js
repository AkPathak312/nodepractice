//weekly typesd variable declaration
var name = "Anike";
var age = 18;
// console.log(name);
// console.log(age);
var hasHobbies = true;

//function in js
function summariseUser(username, userage) {
    return "Name is " + username + " " + "Age is  " + age;
}

//calling function
console.log(summariseUser(name, age));


//var creates a new variable 
//let also creates variable  
//const creates variable whose variabe can't be changed later.
let title = "pathak";
const fixed = 20;



//Arrow functions
//a function can be saved in a variable too
const summariseUser1 = function (username, userage) {
    return "Name is " + username + " " + "Age is  " + age;
}
//works same
console.log(summariseUser1(name, age));
//the above function keyword can be replaced with arrow
const summariseUser2 = (username, userage) => {
    return "Name is " + username + " " + "Age is  " + age;
};


//if function has only 1 line of return statement then return keyword and curly braces 
//can be omitted
const add = (a, p) => a + p;
console.log(add(1, 4));

const noargfunction = () => "Aniket";
console.log(noargfunction());

const {
    name,
    age
} = person;
console.log(name, age);