const person = {
    name: 'Aniket',
    age: 23,
    greet() {
        console.log("Hello " + this.name);
    }
};

const printName = (persondata) => {
    console.log(persondata.name);
}
printName(person);


//Destructuring
//pulls property of object automatically
const printName2 = ({
    name
}) => {
    console.log(name);
}
printName2(person);
const {
    name,
    age
} = person;
//Note the name in {} should be same as property name in object
console.log(name, age);

//array destructuring
const hobbies = [1, 'spoirts', 'drwaing'];
const [hobby1] = hobbies;
console.log(hobby1);