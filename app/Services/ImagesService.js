import { ProxyState } from "../AppState.js";
import { sandbox } from "./AxiosService.js";


class ImagesService {
    async getImage() {
        const res = await sandbox.get('images/')
        console.log(res.data)
        ProxyState.Image = res.data.map(i => new Image(i))
        console.log('call from image service')
    }
}
export const imagesService = new ImagesService()