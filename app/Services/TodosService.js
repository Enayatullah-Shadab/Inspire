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
        let item = ProxyState.Todo.find(t => t.id == id)
        item.completed = !item.completed
        itemd.completed = !item.completed
        console.log(item.completed)
        console.log(item);
        let res = await Sandbox.put("Sha/todos/" + id, item)
        console.log(res.data);
        ProxyState.Todo = ProxyState.Todo
    }
    checked(id) {
        let itemTodo = ProxyState.todos.find(t => t.id == id)
        if (itemTodo.check == false) {
            itemTodo.check = true
        }
    }
}
export const todosService = new TodosService();