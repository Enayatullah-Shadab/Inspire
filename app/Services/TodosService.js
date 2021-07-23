import { ProxyState } from "../AppState.js";
import { sandbox } from "./AxiosService.js";

class TodosService {
    setTodos(name) {


    }
    async getTodos() {
        const res = await sandbox.get()
        console.log(res.data);
        ProxyState.players = res.data

    }

    async createTodos() {
        const res = await sandbox.post('', { name })
        ProxyState.activePlayer = res.data
        ProxyState.players = [...ProxyState.players, res.data]


        console.log(" in Service, addTask")
        ProxyState.tasks = [...ProxyState.tasks, new Task(rawTask)]

    }


    async deleteTodos() {
        let foundTask = ProxyState.tasks.find(task => task.id == id)
        ProxyState.tasks = ProxyState.tasks.filter(task => task.id != id)

    }
}

export const todosService = new TodosService();