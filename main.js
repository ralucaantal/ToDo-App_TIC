import { register } from './Users/Register.js'
import { login } from './Users/Login.js'
import { logout } from './Users/Logout.js'
import { renderTodos } from './ToDos/RenderTodos.js'
import { addToDo } from './ToDos/Add.js'

const loginButton = document.getElementById("loginSubmit")
loginButton.addEventListener('click', login)

const registerButton = document.getElementById("registerSubmit")
registerButton.addEventListener('click', register)

const isLoggedIn = localStorage.getItem("isLoggedIn")

if (isLoggedIn) {
    document.getElementById('login').setAttribute('hidden', 'true')
    document.getElementById('register').setAttribute('hidden', 'true')
    document.getElementById('user').removeAttribute('hidden')
    document.getElementById('greetings').textContent = 'Salut ' + localStorage.getItem('username')
}

renderTodos()

const logoutButton = document.getElementById("logout")
logoutButton.addEventListener('click', logout)


const addEditSubmit = document.getElementById("addEditSubmit")
addEditSubmit.addEventListener('click', addToDo)