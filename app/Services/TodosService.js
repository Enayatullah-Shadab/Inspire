import { ProxyState } from "../AppState.js";
import { sandbox } from "./AxiosService.js";

class TodosService {
    setTodos(name) {


    }
    async getTodos() {
        const res = await sandbox.get('Sha/Todos')
        console.log(res.data);
        ProxyState.players = res.data
    }
    async createTodos() {
        const res = await sandbox.post('Sha/Todos', { Template })
        ProxyState.todos = res.data
        ProxyState.todos = [...ProxyState.todos, res.data]
    }
    async deleteTodos() {
        let foundTodo = ProxyState.todos.find(t => t.id == id)
        ProxyState.todos = ProxyState.todos.filter(t => t.id != id)
    }
    checked(id) {
        let foundTodo = ProxyState.todos.find(t => t.id == id)
        if (foundTodo.check == false) {
            foundTodo.check = true
        }
    }
}
export const todosService = new TodosService();