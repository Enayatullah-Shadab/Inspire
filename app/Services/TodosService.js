import { ProxyState } from "../AppState.js";
import { sandbox } from "./AxiosService.js";

class TodosService {
    setTodos(name) {

    }
    async getTodos() {
        const res = await sandbox.get('Sha/todos')
        console.log(res.data);
        ProxyState.todos = res.data
    }
    async createTodo(rawTodo) {
        const res = await sandbox.post('Sha/todos', rawTodo)
        ProxyState.todo = res.data
        console.log(res.data);
        ProxyState.Todo = [...ProxyState.Todo, new Todo(res.data)]
    }
    async deleteTodo() {
        let res = sandbox.deleteTodo("Sha/todos " + id)
        ProxyState.todos = ProxyState.Todo.filter(t => t.id != id)
    }
    async updateTodo(id) {
        let found = ProxyState.Todo.find(t => t.id == id)
        found.completed = !found.completed
        found.completed = !found.completed
        console.log(found.completed)
        console.log(found);
        let res = await Sandbox.put("Sha/todos/" + id, found)
        console.log(res.data);
        ProxyState.Todo = ProxyState.Todo

    }
    checked(id) {
        let foundTodo = ProxyState.todos.find(t => t.id == id)
        if (foundTodo.check == false) {
            foundTodo.check = true
        }
    }
}
export const todosService = new TodosService();