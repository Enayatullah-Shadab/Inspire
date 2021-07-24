import { ProxyState } from "../AppState.js";
import { sandbox } from "./AxiosService.js";


class QoutesService {
    async getQoute() {
        const res = await sandbox.get('Sha/todos')
        console.log(res.data)
        ProxyState.Qoute = res.data.map(q => new Qoute(q))
    }

}

export const qoutesService = new QoutesService()