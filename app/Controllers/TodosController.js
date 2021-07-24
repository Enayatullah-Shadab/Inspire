import { ProxyState } from "../AppState.js"
import { todosService } from "../Services/TodosService.js"

function _draw() {
    const todos = ProxyState.todos
    let template = ''
    todos.forEach(t => template += t.Template)
    document.getElementById('todos-name').innerHTML = template
}

export default class TodosController {
    constructor() {
        ProxyState.on('todos', _draw)
        this.getTodos()

    }
    async getTodos() {
        try {
            todosService.getTodos()
        } catch (error) {
            console.log("It looks there is a problem:" + error)
        }
    }
    async newTodo() {
        try {

        } catch (error) {

            window.alert(error)
        }
    }
    async deleteTodo(id) {
        try {
            todosService.deleteTodo(id)
        } catch (error) {
            console.log(error)
        }
    }
    async updateTodo(id) {
        try {
            todosService.updateTodo(id)
        } catch (error) {
            console.log(error)
        }
    }
}