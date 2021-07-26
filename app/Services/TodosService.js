import { ProxyState } from "../AppState.js";
import { sandbox } from "./AxiosService.js";
import Todo from "../Models/Todo.js";

class TodosService {

    constructor() {

    }
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

    async updateTodo(id, checked) {

        try {
            let res = await sandbox.put("Sha/todos/" + id, { completed: checked })
            console.log(res.data);

            let item = ProxyState.todo.find(t => t.id == id)
            if (item.completed === checked) {
                item.completed = false;
            }
            else {
                item.completed = checked;
            }

            ProxyState.todo = ProxyState.todo
        } catch (error) {
            console.log(error)
        }
    }
    async deleteTodo(id) {
        try {
            let res = await sandbox.delete("Sha/todos/" + id)
            ProxyState.todo = ProxyState.todo.filter(t => t.id != id)
        } catch (error) {
            console.error(error)
        }
    }


    countTodos() {
        let totalTodos = ProxyState.todo.filter(t => t.id)
        if (totalTodos.length == undefined) {
            totalTodos = 0
        } else {
            totalTodos = totalTodos.length
        }
        let checkCount = ProxyState.todo.filter(t => t.completed == true)
        if (checkCount.length == undefined) {
            checkCount = 0
        } else {
            checkCount = checkCount.length
        }
        if (totalTodos != 0) {
            document.getElementById('tcount').innerHTML = checkCount + '/' + totalTodos
        } else {
            document.getElementById('tcount').innerHTML = ''
        }
    }

}
export const todosService = new TodosService();
