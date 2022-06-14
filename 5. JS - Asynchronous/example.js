const getUser = async () => {
  const result = await fetch("https://jsonplaceholder.typicode.com/users/1");
  return result.json();
};

const getUserColab = async () => {
  return await new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((user) => resolve(user))
      .catch((error) => reject(error));
  });
};

window.onload = async () => {
  console.log(await getUser());
};
