import { ProxyState } from "../AppState.js"
import { todosService } from "../Services/TodosService.js"


function _drawAll() {
    // todo is my variable and Todo is my class name
    const todo = ProxyState.todo
    let template = ''
    todo.forEach(t => template += t.Template)
    document.getElementById('todos-name').innerHTML = template
    if (!template) {
        document.getElementById('todos-name').innerHTML = `<h4> <h4> Please enter a text to display it</h4>`
    }
}

export default class TodosController {
    constructor() {
        ProxyState.on('todo', _drawAll)
        //   loadState()
        this.getTodo()
    }

    async getTodo() {
        try {
            await todosService.getTodo()
        } catch (error) {
            console.log(" something was wrong " + error)
        }
    }
    async newTodo() {

        try {
            event.preventDefault()
            let form = event.target
            let rawTodo = {
                description: form.details.value
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
            if (window.confirm('Are you sure,you want to delete it?')) {
                await todosService.deleteTodo(id)
                console.log("todo deleted")
            }
        } catch (error) {
            console.error(error)
        }
    }
}