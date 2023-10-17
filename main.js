let users = [
  {
    id: 1,
    name: "Mihai",
    email: "mihai@gmail.com",
    password: "Mihai1!",
  },
  {
    id: 2,
    name: "Raluca",
    email: "raluca@gmail.com",
    password: "Raluca6!",
  },
];

let toDos = [
  {
    id: 1,
    taskName: "Do the dishes!",
    status: "to-do",
    responsable: "Mihai",
  },
  {
    id: 2,
    taskName: "Do the laundry!",
    status: "to-do",
    responsable: "Mihai",
  },
  {
    id: 3,
    taskName: "Do your homework",
    status: "in-progress",
    responsable: "Raluca",
  },
  {
    id: 4,
    taskName: "binging",
    status: "to-do",
    responsable: "Raluca",
  },
];

import { login } from "./Login/Login.js";

const loginButton = document.getElementById("loginSubmit");
loginButton.addEventListener("click", login);
