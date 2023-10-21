const person1 = {
  age: 20,
};

const person2 = {
  age: 23,
  name: "Alice",
};

const person3 = {
  age: 27,
  name: "Amanda",
  surname: "Jones",
};

function CreatePerson(age, surname, name) {
  (this.name = name ? name : null), (this.surname = surname ? surname : null);
  this.age = age;
}

const newPerson1 = new CreatePerson(33, "Snowden", "Edward");
console.log(newPerson1);

const setNewPerson = (age) => {
  CreatePerson.call(person1, age);
};

const result = setNewPerson(23);

console.log(result);
