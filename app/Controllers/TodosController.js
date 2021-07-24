import { ProxyState } from "../AppState.js"
import { todosService } from "../Services/TodosService.js"

function _drawAll() {

    // todo is my variable and Todo is my class name
    const todo = ProxyState.Todo
    let template = ''
    todo.forEach(t => template += t.Template)
    document.getElementById('todos-name').innerHTML = template
    if (!template) {
        document.getElementById('todos-name').innerHTML = `<h4> <h4> Please enter a text to display it</h4>`
    }
}

export default class TodosController {
    constructor() {
        ProxyState.on('todos', _drawAll)
        this.getTodos()

    }

    async getTodos() {
        try {
            await todosService.getTodos()
        } catch (error) {
            console.log(" something was wrong " + error)
        }
    }
    async newTodo() {
        try {
            window.event.preventDefault()
            let form = window.event.target
            let rawTodo = {
                details: form.details.value
            }
            await todosService.newTodo(rawTodo)
            form.reset
        } catch (error) {

            console.log("something went wrong " + error)
        }
    }
    async updateTodo(id) {
        try {
            await todosService.updateTodo(id)
        } catch (error) {
            console.error(error);
        }
    }

    async deleteTodo(id) {
        try {
            await todosService.deleteTodo(id)
        } catch (error) {
            console.error(error)
        }
    }
}