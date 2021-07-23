export default class Task {
    constructor({ name, _id, check }) {
        this.name = name
        this.id = _id
        this.check = check || false
    }
    get Template() {
        return `
        <div class="card w-50">
        <h3 class="text-left m-4">Todos</h3>

        <div class="card-body form-check d-flex flex-column ml-5">
            <label class="form-check-label">
                <input type="checkbox" id=${this.id}  onclick="app.todosController.checked('${this.id}')" ${this.check ? checked : ""} >
                <label class="col-10" for="checkbox"> ${this.name}</label>
        </div >

            <span><i class="mdi mdi-15px mdi-trash-can" onclick="app.listsController.deleteTodos()"></i></span>
    </div > `
    }
}