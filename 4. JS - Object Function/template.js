// Object Definition
const user = {
  firstName: "Jefri",
  lastName: "Herdi Triyanto",
  age: 26,
  position: "Middle Web Developer (NodeJS)",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

// Nested Objects
const books = {
  name: "Belajar singkat Javascript",
  publish: "12-12-2012",
  author: {
    name: "Jefri Herdi Triyanto",
    email: "jefri.triyanto@ist.id",
    url: "https://portofolio.jefripunza.repl.co",
  },
};

// Nested Arrays and Objects
const profile = {
  name: "Jefri Herdi Triyanto",
  hobby: ["Musik", "Renang", "Koding", "Balap Motor", "Gelud"],
};

// Accessing Object Properties
// normal
const your_name = user.firstName;
// or - key string
const your_age = user["age"];
// or - key variable
const key = "position";
const my_position = user[key];
// or - combine string
const my_full_name = user.firstName + " " + user.lastName;
// or - function access
const my_name = user.fullName();

// manual insert/inject data
const person = {};
// const person = new Object();
person.firstName = "Jefri";
person.lastName = "Herdi Triyanto";
person.age = 26;
person.position = "Middle Web Developer (NodeJS)";
