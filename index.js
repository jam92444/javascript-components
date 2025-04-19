// const person = new Object();

// person.firstname = "Jmaal";
// person.lastname= "yusuf";
// person.age = 22;
// person.address = "Coimbatore";

// console.log(person)
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
const x = person;

// This will change age in person:
x.age = 10;

console.log(person.firstName + " is " + person.age + " years old.");
