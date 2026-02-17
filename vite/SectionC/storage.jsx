export function saveUser() {
  const user = { name: "Ali", age: 25 };
  localStorage.setItem("user", JSON.stringify(user));
}

export function getUser() {
  return JSON.parse(localStorage.getItem("user"));
}
// for the storage of data we use the JSON.stringify
// localStorage only store string