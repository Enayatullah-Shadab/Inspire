import { ProxyState } from "../AppState.js";
import { sandbox } from "./AxiosService.js";


class ImagesService {
    async getImage() {
        const res = await sandbox.get('Sha/todos')
        console.log(res.data)
        ProxyState.Image = res.data.map(i => new Image(i))
    }

}

export const imagesService = new ImagesService()