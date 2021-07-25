import { ProxyState } from "../AppState.js"
import { imagesService } from "../Services/ImagesService.js"


function _drawImage() {
    const image = ProxyState.image
    let template = ''
    debugger;
    image.forEach(i => template += i.Template)
    document.body.style.backgroundImage = 'no-repeat'
    document.body.style.backgroundImage = "url('" + template + "')"
}

export default class ImagesController {

    constructor() {
        //  ProxyState.on('image', _drawImage())
        this.getImage()
    }
    async getImage() {
        try {
            await imagesService.getImage()
        } catch (error) {
            console.log("error from catch block" + error)
        }
    }
}