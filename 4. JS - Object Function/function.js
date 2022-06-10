const user = {
  firstName: "Jefri",
  lastName: "Herdi Triyanto",
  age: 26,
  position: "Middle Web Developer (NodeJS)",
};

// convert Object to string JSON
const string_of_json = JSON.stringify(user, null, 2);

// convert string JSON to Object
const json_string = '{"name":"Jefri", "age":26, "vehicle":null}';
const string_to_json = JSON.parse(json_string);

// from Object to Array
// --> Using Object.values()
// - only key
const key = Object.keys(user);
// - only value
const value = Object.values(user);
