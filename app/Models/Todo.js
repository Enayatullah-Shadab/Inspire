export default class Todo {

    constructor({ user, _id, complated, description }) {
        this.user = user
        this.id = _id
        this.description = description
        this.complated = complated || false
    }
    get Template() {
        return `
        <div class="card">
        <div class="card-body m=1">
                <input type="checkbox" id="${this.id}" onclick="app.todosController.updateTodo('${this.id}') ${this.check ? "checked" : ""} >
                <label class="col-10 form-check-label align-space-between" for="${this.user}">
                ${this.description}
                <span><i class="mdi mdi-15px mdi-trash-can" onclick="app.todosController.deleteTodo('${this.id}')"></i></span>
        </div >
        </div > `
    }
}