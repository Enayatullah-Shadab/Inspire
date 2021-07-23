import { ProxyState } from "../AppState.js"
import { todosService } from "../Services/TodosService.js"

function _draw() {
    const todos = ProxyState.todos
    let template = ''
    todos.forEach(t => template += t.Template)
    document.getElementById('todo-name').innerHTML = template
}

export default class TodosController {
    constructor() {
        ProxyState.on('todos', _draw)
        this.getTodos()
    }
    async getTodos() {
        try {
            await TodosService.getTodos()
        } catch (error) {
            console.error(error)
        }
    }
}