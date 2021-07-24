export default class Todo {

    constructor({ name, _id, details, checked }) {
        this.name = name
        this.id = _id
        this.details = details
        this.checked = checked || false
    }
    get Template() {
        return `
        <div class="card w-50 d-flex flex-row">
        <h3 class="text-left m-4">Todos</h3>
        <div class="card-body form-check d-flex flex-column ml-5"">
                <input type="checkbox" id="${this.id}" onclick="app.todosController.updateTodo('${this.id}')" ${this.isChecked}} >
                <label class="col-10 form-check-label" for="${this.name}">
                ${this.details}
        </div >
            <span>
            <span><i class="mdi mdi-15px mdi-trash-can" onclick="app.listsController.deleteTodo('${this.id}')"></i></span>
            </span>
        </div > `
    }
    get isChecked() {
        let template = ''
        if (this.checked) {
            template = 'checked'
        } else {
            template = ''
        }
        return template
    }
}