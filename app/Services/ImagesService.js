import { ProxyState } from "../AppState.js";
import { sandbox } from "./AxiosService.js";


class ImagesService {

    async getImage() {
        try {
            const res = await sandbox.get('images/')
            console.log(res.data)
            ProxyState.image = res.data.map(i => new Image(i))
            console.log('call from image service')
        } catch (error) {
            window.error("error trom image service  " + error)
        }
    }
}
export const imagesService = new ImagesService()