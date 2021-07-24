import { ProxyState } from "../AppState.js"
import { imagesService } from "../Services/ImagesService.js"


export default class ImagesController {

    async getImage() {
        try {
            await imageService.getTodos()
        } catch (error) {
            console.log(" something was wrong " + error)
        }
    }

}