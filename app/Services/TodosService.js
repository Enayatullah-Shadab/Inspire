import { ProxyState } from "../AppState.js";
import { sandbox } from "./AxiosService.js";
import Todo from "../Models/Todo.js";

class TodosService {

    async getTodo() {
        try {
            const res = await sandbox.get('Sha/todos')
            console.log(res.data)
            ProxyState.todo = res.data.map(t => new Todo(t))
        } catch (error) {
            console.error()
        }
    }

    async newTodo(rawTodo) {

        try {
            const res = await sandbox.post('Sha/todos', rawTodo)
            console.log(res.data);
            ProxyState.todo = [...ProxyState.todo, new Todo(res.data)]
        } catch (error) {
            console.log(error)
        }
    }

    async updateTodo(id) {

        try {
            let item = ProxyState.todo.find(t => t.id == id)
            item.checked = !item.checked
            console.log(item.checked)
            console.log(item);
            let res = await sandbox.put("Sha/todos/" + id, item)
            console.log(res.data);
            ProxyState.todo = ProxyState.todo
        } catch (error) {
            console.log(error)
        }

    }
    async deleteTodo(id) {
        debugger;
        try {
            let res = await sandbox.delete("Sha/todos/" + id)
            ProxyState.todo = ProxyState.todo.filter(t => t.id != id)
        } catch (error) {
            console.error(error)
        }
    }
}
export const todosService = new TodosService();
