export default class Image {

    constructor({ url, imgUrl, largeImgUrl, tags, autor, query }) {
        this.url = url || false
        this.imgUrl = imgUrl
        this.largeImgUrl = largeImgUrl
        this.tags = tags
        this.autor = autor
        this.query = query
    }
    get Template() {
        return `
    <div class=" row text center p-2 m-2">
        <div class="col-3" id="image">
        ${this.url}
        </div>
    </div> `
    }
}


