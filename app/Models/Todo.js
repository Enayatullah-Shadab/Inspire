export default class Todo {

    constructor({ user, _id, complated, description }) {
        this.user = user
        this.id = _id
        this.description = description
        this.complated = complated || false
    }
    get Template() {
        return `
        <div class="card w-50 d-flex flex-row">
        <h3 class="text-left m-4">Todos</h3>
        <div class="card-body form-check d-flex flex-column ml-5"">
                <input type="checkbox" id="${this.id}" onclick="app.todosController.updateTodo('${this.id}')" ${this.isCompleted}} >
                <label class="col-10 form-check-label" for="${this.user}">
                ${this.description}
        </div >
            <span>
            <span><i class="mdi mdi-15px mdi-trash-can" onclick="app.todosController.deleteTodo('${this.id}')"></i></span>
            </span>
        </div > `
    }
    get isCompleted() {
        let template = ''
        if (this.complated) {
            template = 'complated'
        } else {
            template = ''
        }
        return template
    }
}