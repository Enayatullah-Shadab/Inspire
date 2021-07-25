export default class Image {

    constructor({ url, imgUrl, largeImgUrl, tags, author, query }) {
        this.url = url
        this.imgUrl = imgUrl || false
        this.largeImgUrl = largeImgUrl
        this.tags = tags
        this.author = author
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


