export default class Quote {

    constructor({ content, aoutor }) {
        this.content = content
        this.autor = autor
    }
    get Template() {
        return `
    <div class=" row text center p-2 m-2">
        <div class="col-3" id="quote">
        ${this.content}
        ${this.autor}
        </div>
    </div> `
    }
}