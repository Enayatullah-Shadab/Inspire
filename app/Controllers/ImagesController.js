import { ProxyState } from "../AppState.js"
import { imagesService } from "../Services/ImagesService.js"


export default class ImagesController {

    constructor() {
        ProxyState.on('image', _drawImage())
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