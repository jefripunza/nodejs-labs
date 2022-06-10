const user = {
  firstName: "Jefri",
  lastName: "Herdi Triyanto",
  age: 26,
  position: "Middle Web Developer (NodeJS)",
};

// insert new key in object

// insert array in key array

// --------------------------------------------

const karyawan = {
  nama: "Dhimas",
};

const manager = {
  nama: "",
  ...karyawan,
};

console.log({ manager });
