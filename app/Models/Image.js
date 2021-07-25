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
        return `${this.url}`
    }
}


