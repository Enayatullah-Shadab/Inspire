import { ProxyState } from "../AppState.js";
import { sandbox } from "./AxiosService.js";

class TodosService {

    async getTodos() {
        const res = await sandbox.get('Sha/todos')
        console.log(res.data)
        ProxyState.Todo = res.data.map(t => new Todo(t))
    }

    async newTodo(rawTodo) {
        const res = await sandbox.post('Sha/todos', rawTodo)
        console.log(res.data);
        ProxyState.Todo = [...ProxyState.Todo, new Todo(res.data)]
    }

    async updateTodo(id) {
        let item = ProxyState.Todo.find(t => t.id == id)
        item.checked = !item.checked
        console.log(item.checked)
        console.log(item);
        let res = await Sandbox.put("Sha/todos/" + id, item)
        console.log(res.data);
        ProxyState.Todo = ProxyState.Todo
    }
    async deleteTodo(id) {
        let res = await Sandbox.delete("Sha/todos" + id)
        ProxyState.Todo = ProxyState.Todo.filter(t => t.id != id)
    }
}
export const todosService = new TodosService();