export default class Todo {

    constructor({ user, _id, completed, description }) {
        this.user = user || false
        this.id = _id
        this.description = description
        this.completed = completed || false
    }
    get Template() {
        return `<div class="custom-control custom-checkbox">
            <input type="checkbox" value=""${this.completed ? 'checked' : ""} id="${this.id}" 
            onchange="app.todosController.handletodochange(event)">
                <label class="col-10 form-check-label" for="${this.id}">
                ${this.description} &nbsp; &nbsp; &nbsp;
                <span><i class="mdi mdi-15px mdi-trash-can" class="text-right" onclick="app.todosController.deleteTodo('${this.id}')"></i></span>
         </div>`
    }


}

